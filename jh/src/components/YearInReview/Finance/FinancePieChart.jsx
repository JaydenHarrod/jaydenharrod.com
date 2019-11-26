import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { value: 13591, name: 'Rent' },
  { value: 8696, name: 'Shopping' },
  { value: 3239, name: 'Dining' },
  { value: 3076, name: 'Groceries' },
  { value: 2254, name: 'Transport' },
  { value: 1874, name: 'Misc' }
];
const COLORS = [
  'rgb(72, 52, 212)',
  'rgb(235, 77, 75)',
  'rgb(106, 176, 76)',
  'rgb(249, 202, 36)',
  'rgb(34, 166, 179)',
  'rgb(104, 109, 224)'
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`$${value.toLocaleString()}`}
    </text>
  );
};

const FinancePieChart = () => {
  return (
    <ResponsiveContainer height={300} width="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="45%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default FinancePieChart;

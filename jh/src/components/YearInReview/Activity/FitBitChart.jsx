import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
  YAxis,
  XAxis
} from 'recharts';

const data = [
  { name: 'Jan', Steps: 140290, amt: 2400 },
  { name: 'Feb', Steps: 55260, amt: 2210 },
  { name: 'Mar', Steps: 100151, amt: 2290 },
  { name: 'Apr', Steps: 227706, amt: 2000 },
  { name: 'May', Steps: 57052, amt: 2181 },
  { name: 'June', Steps: 200397, amt: 2500 },
  { name: 'July', Steps: 355123, amt: 2100 },
  { name: 'Aug', Steps: 312327, amt: 2100 },
  { name: 'Sept', Steps: 210120, amt: 2100 },
  { name: 'Oct', Steps: 245857, amt: 2100 },
  { name: 'Nov', Steps: 369645, amt: 2100 },
  { name: 'Dec', Steps: 232344, amt: 2100 }
];

const FitBitChart = () => {
  return (
    <ResponsiveContainer height={300} width="100%">
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={value => value.toLocaleString()} />
        <Bar dataKey="Steps" fill="rgb(34, 166, 179)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default FitBitChart;

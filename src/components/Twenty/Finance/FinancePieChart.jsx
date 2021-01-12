import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { value: 5400, name: "Transport" },
  { value: 17300, name: "Housing" },
  { value: 20000, name: "Luxuries" },
  { value: 1850, name: "Business" },
];

const COLORS = [
  "rgb(212, 135, 135)",
  "rgb(219, 155, 155)",
  "rgb(227, 175, 175)",
  "rgb(234, 195, 195)",
];

const renderLabel = function (entry) {
  return `${entry.name} ($${entry.value.toLocaleString()})`;
};

const FinancePieChart = () => {
  const mobile = window.innerWidth <= 700;
  return (
    <ResponsiveContainer height={500} width="100%">
      <PieChart>
        <Pie
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy={mobile ? 150 : 200}
          outerRadius={125}
          label={mobile ? null : renderLabel}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          payload={data.map((item, index) => ({
            id: item.name,
            type: "line",
            color: COLORS[index % COLORS.length],
            value: `${item.name} ($${item.value.toLocaleString()})`,
          }))}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default FinancePieChart;

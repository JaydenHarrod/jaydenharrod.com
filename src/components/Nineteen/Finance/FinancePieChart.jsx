import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { value: 15000, name: "Auto & Transport" },
  { value: 6000, name: "Rent" },
  { value: 6000, name: "Shopping" },
  { value: 6000, name: "Dining" },
  { value: 5000, name: "Gifts & Donations" },
  { value: 4000, name: "Groceries" },
  { value: 2500, name: "Health" },
  { value: 2200, name: "Travel" },
  { value: 1500, name: "Hobbies" },
  { value: 1500, name: "Homewares" },
  { value: 1500, name: "Utilities" },
  { value: 600, name: "Personal Care" }
];
const COLORS = [
  "rgb(101, 36, 36)",
  "rgb(116, 41, 41)",
  "rgb(136, 48, 48)",
  "rgb(156, 55, 55)",
  "rgb(176, 63, 63)",
  "rgb(191, 75, 75)",
  "rgb(198, 95, 95)",
  "rgb(205, 115, 115)",
  "rgb(212, 135, 135)",
  "rgb(219, 155, 155)",
  "rgb(227, 175, 175)",
  "rgb(234, 195, 195)"
];

const renderLabel = function(entry) {
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
          fill="#8884d8"
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
            value: `${item.name} ($${item.value.toLocaleString()})`
          }))}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default FinancePieChart;

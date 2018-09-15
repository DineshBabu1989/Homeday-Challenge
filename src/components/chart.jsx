import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const SimpleLineChart = props => {
  return (
    <div>
      <LineChart
        width={600}
        height={300}
        data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="name"
          stroke="#8884d8"
          activeDot={{ r: 30 }}
        />
        <Line type="monotone" dataKey="contribution" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default SimpleLineChart;

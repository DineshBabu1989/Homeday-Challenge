import React from "react";
import {
  LineChart,
  ResponsiveContainer,
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
      <div className="repo--list__detail--chart  col-lg-12 col-md-6 col-sm-12">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
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
              stroke="#0366d6"
              activeDot={{ r: 30 }}
            />
            <Line type="monotone" dataKey="contribution" stroke="#0366d6" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleLineChart;

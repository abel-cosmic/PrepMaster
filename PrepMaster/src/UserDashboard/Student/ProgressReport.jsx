import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "April", uv: 133, pv: 2400, amt: 2400 },
  { name: "May", uv: 300, pv: 2000, amt: 2000 },
  { name: "June ", uv: 150, pv: 1600, amt: 1600 },
  { name: "July", uv: 100, pv: 1200, amt: 1200 },
  { name: "April", uv: 133, pv: 2400, amt: 2400 },
  { name: "May", uv: 300, pv: 2000, amt: 2000 },
  { name: "June ", uv: 150, pv: 1600, amt: 1600 },
  { name: "July", uv: 100, pv: 1200, amt: 1200 },
  { name: "April", uv: 133, pv: 2400, amt: 2400 },
  { name: "May", uv: 300, pv: 2000, amt: 2000 },
  { name: "June ", uv: 150, pv: 1600, amt: 1600 },
  { name: "July", uv: 100, pv: 1200, amt: 1200 },
];

export default function ProgressReport() {
  const isSmallScreen = window.innerWidth <= 767; // Check the screen width directly

  const chartWidth = isSmallScreen ? 330 : 1200; // Set the width based on the screen size
  const chartHeight = isSmallScreen ? 300 : 300; // Set the height based on the screen size

  return (
    <div className="container pr-16 pl-4 py-4 mt-4 max-md:h-[20rem]">
      <p className="text-xl my-6 font-medium">Progress Report</p>
      <LineChart
        width={chartWidth}
        height={chartHeight}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}

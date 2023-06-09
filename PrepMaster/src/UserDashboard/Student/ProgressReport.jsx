import ProgressAnalytics from "../../assets/ProgressAnalytics.svg";
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
  return (
    <div className="container pr-16 pl-4 py-4 mt-4 max-md:h-[20rem]">
      <LineChart
        width={1200}
        height={300}
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

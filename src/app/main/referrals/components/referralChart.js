import Typography from '@mui/material/Typography';
import { formatNumber, formatNumberWithOutDecimal } from '@fuse/utils';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}
      >
        <p className="label">{`Date: ${label}`}</p>
        <p className="intro">{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const CustomBarLabel = ({ x, y, width, value }) => {
  return (
    <text
      x={x + width / 2}
      y={y - 10}
      fontSize={10}
      textAnchor="middle"
      fontFamily="Mint Grotesk Trial, sans-serif"
      style={{ fontWeight: 600 }} // Custom CSS
    >
      +{formatNumber(value)}
    </text>
  );
};

const CustomXAxisTick = ({ x, y, payload }) => {
  return (
    <text x={x} y={y} textAnchor="middle" style={{ fill: '#0B2E31', fontSize: '10px', fontWeight: 400 }}>
      {payload.value}
    </text>
  );
};

const CustomYAxisTick = ({ x, y, payload }) => {
  return (
    <text x={x} y={y} textAnchor="end" style={{ fill: '#032123', fontSize: '16px', fontWeight: 500, fontFamily: "Mint Grotesk Trial, sans-serif" }}>
      {formatNumberWithOutDecimal(payload.value)}
    </text>
  );
};



const data = [
  { name: '01-01-23', pv: 2400, amt: 2400 },
  { name: '01-02-23', pv: 1398, amt: 2210 },
  { name: '01-03-23', pv: 9800, amt: 2290 },
  { name: '01-04-23', pv: 3908, amt: 2000 },
  { name: '01-05-23', pv: 4800, amt: 2181 },
  { name: '01-06-23', pv: 3800, amt: 2500 },
  { name: '01-07-23', pv: 4300, amt: 2100 },
  { name: '01-08-23', pv: 2400, amt: 2400 },
  { name: '01-09-23', pv: 1398, amt: 2210 },
  { name: '01-10-23', pv: 9800, amt: 2290 },
  { name: '01-12-23', pv: 3908, amt: 2000 },
  { name: '01-01-23', pv: 2400, amt: 2400 },
  { name: '01-02-24', pv: 1398, amt: 2210 },
  { name: '01-03-24', pv: 9800, amt: 2290 },
  { name: '01-04-24', pv: 3908, amt: 2000 },
  { name: '01-05-24', pv: 4800, amt: 2181 },
  { name: '01-06-24', pv: 3800, amt: 2500 },
  { name: '01-07-24', pv: 4300, amt: 2100 },
  { name: '01-08-24', pv: 2400, amt: 2400 },
  { name: '01-09-24', pv: 1398, amt: 2210 },
  { name: '01-10-24', pv: 9800, amt: 2290 },
  { name: '01-12-24', pv: 3908, amt: 2000 },
];

const ReferralChart = () => {
  return (
    <div className="w-full border border-[#C4F3D6] bg-[#F3F9F7] rounded-[12px] p-12">
      <Typography className="font-medium text-[20px] mb-24">Monthly Referral Payout’s</Typography>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[1000px]">
          <ResponsiveContainer width={80 * data.length} height={320}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 20, left: 20, bottom: 40 }} // Increased bottom margin
            >
              <CartesianGrid vertical={false} strokeDasharray="3 0" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                interval={0}
                tickMargin={15}
                tick={<CustomXAxisTick />}
              />
              <YAxis axisLine={false} tickLine={false} tick={<CustomYAxisTick />} />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="pv"
                fill="#53C07D"
                radius={4}
                barSize={50}
              >
                <LabelList dataKey="pv" content={<CustomBarLabel />} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ReferralChart;

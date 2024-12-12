import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { formatNumber, formatNumberWithDecimal, formatNumberWithOutDecimal } from '@fuse/utils';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
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

const ranges = ["7D", "14D", "1M", "3M", "1Y", "ALL"];
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
      y={value > 0 ? y - 10 : y + 15}
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

const CustomBar = ({ x, y, width, height, value }) => {
  const fillColor = value < 0 ? '#FF143E' : '#53C07D'; // Color logic
  const radius = 4; // Set radius for corners

  // Adjust Y position and height for negative values
  const barY = value < 0 ? y + height : y;
  const barHeight = value < 0 ? -height : height; // Ensure height is positive

  return (
    <g>
      <rect
        x={x}
        y={barY} // Adjusted Y position
        width={width}
        height={barHeight} // Adjusted height for visibility
        fill={fillColor}
        rx={radius} // x-axis radius
        ry={radius} // y-axis radius
      />
    </g>
  );
};
const data = [
  { name: '01-01-23', pv: 2400 },
  { name: '01-02-23', pv: -1398 },
  { name: '01-03-23', pv: 9800 },
  { name: '01-04-23', pv: -3908 },
  { name: '01-05-23', pv: 4800 },
  { name: '01-06-23', pv: -3800 },
  { name: '01-07-23', pv: 4300 },
  { name: '01-08-23', pv: 2400 },
  { name: '01-09-23', pv: -1398 },
  { name: '01-10-23', pv: 9800 },
  { name: '01-12-23', pv: -3908 },
  { name: '01-01-24', pv: 2400 },
  { name: '01-02-24', pv: 1398 },
  { name: '01-03-24', pv: -9800 },
  { name: '01-04-24', pv: 3908 },
  { name: '01-05-24', pv: -4800 },
  { name: '01-06-24', pv: 3800 },
  { name: '01-07-24', pv: -4300 },
  { name: '01-08-24', pv: 2400 },
  { name: '01-09-24', pv: 1398 },
  { name: '01-10-24', pv: -9800 },
  { name: '01-12-24', pv: 3908 },
];

const ProfitChart = (props) => {
  const [tabValue, setTabValue] = useState(0);
  const currentRange = Object.keys(ranges)[tabValue];

  const theme = useTheme();



  return (
    <div className="col-span-2 border border-[#C4F3D6] rounded-[12px] bg-[#F3F9F7] p-[16px]">
      <Typography color="primary" className="font-medium text-[20px]">Profit & Loss</Typography>
      <div className="mt-[12px] w-full flex justify-between items-center">
        <Tabs
          value={tabValue}
          onChange={(ev, value) => setTabValue(value)}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons={false}
          className="-mx-4 min-h-40"
          classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
        >
          {Object.entries(ranges).map(([key, label]) => (
            <Tab
              className={clsx("text-[16px] font-bold w-auto px-12 opacity-100 min-h-[32px] max-h-[32px] min-w-48", currentRange === key ? "text-white bg-[#0C4547] rounded-[8px]" : "text-[#032123]")}
              disableRipple
              key={key}
              label={label}
            />
          ))}
        </Tabs>
        <div>
          <Typography className="font-medium text-[14px]">Today Profit</Typography>
          <div className="flex items-end gap-x-2">
            <Typography className="font-Mint text-[12px]" color="primary">
              $
            </Typography>
            <Typography className="font-Mint text-[16px] font-semibold" color="primary">
              {formatNumberWithDecimal(2149350).integer}
            </Typography>
            <Typography className="font-Mint text-[12px]" color="primary">
              .{formatNumberWithDecimal(2149350).decimal}
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-auto mt-[12px]">
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1000px]">
            <ResponsiveContainer width={80 * data.length} height={320}>
              <BarChart
                data={data}
                margin={{ top: 20, right: 20, left: 20, bottom: 20 }} // Increased bottom margin
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
                  shape={<CustomBar />}
                  barSize={50}
                >
                  <LabelList dataKey="pv" content={<CustomBarLabel />} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitChart;

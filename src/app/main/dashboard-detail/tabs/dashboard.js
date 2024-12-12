import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';
import Typography from '@mui/material/Typography';
import { formatNumberWithDecimal } from '@fuse/utils';
import ProfitCard from '../components/profitCard';
import WalletBalanceCard from '../components/walletBalanceCard';
import UnrealizedCard from '../components/unrealizedCard';
import MarginBalanceCard from '../components/marginBalanceCard';
import ProfitChart from '../components/profitChart';
import ProfitTable from '../components/profitTable';

const profitData = [
  { period: '7D', value: 2149350, percentage: 10 },
  { period: '14D', value: 2149350, percentage: 10 },
  { period: '1M', value: 2149350, percentage: 10 },
  { period: '3M', value: 2149350, percentage: 10 },
  { period: '1Y', value: 2149350, percentage: 10 },
  { period: 'ALL', value: 2149350, percentage: 10 },
];
const DashboardTab = () => {
  const user = useSelector(selectUser);

  return (
    <div className="">
      <div className="mt-[32px] grid grid-cols-1 md:grid-cols-2 gap-x-16">
        <div>
          <Typography className="font-medium text-[14px]">Today Profit</Typography>
          <div className="flex items-end gap-x-2">
            <Typography className="font-Mint text-[30px] pb-[8px]" color="primary">
              $
              <span className="font-Mint text-[60px] font-semibold" color="primary">
                {formatNumberWithDecimal(2149350).integer}
              </span>
              <span className="font-Mint text-[30px] pb-[8px]" color="primary">
                .{formatNumberWithDecimal(2149350).decimal}
              </span>
            </Typography>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {profitData.map((item, index) => (
            <ProfitCard key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[42px]">
        <WalletBalanceCard value={2350105.54} />
        <UnrealizedCard value={-2350105.54} />
        <MarginBalanceCard value={2350105.54} />
      </div>
      <div className="mt-[64px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        <ProfitChart />
        <ProfitTable />
      </div>
    </div>
  );
};

export default DashboardTab;

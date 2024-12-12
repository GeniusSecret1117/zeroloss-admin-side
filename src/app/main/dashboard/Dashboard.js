import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { formatNumberWithDecimal } from '@fuse/utils';
import TotalCard from './components/totalCard';
import ActiveCard from './components/activeCard';
import InActiveCard from './components/inactiveCard';
import ProfitCard from './components/profitCard';
import WalletBalanceCard from './components/walletBalanceCard';
import UnrealizedCard from './components/unrealizedCard';
import MarginBalanceCard from './components/marginBalanceCard';
import CapitalAmountCard from './components/capitalAmountCard';
import CustomerProfitCard from './components/customerProfitCard';
import ZerolossProfitCard from './components/zeroLossProfitCard';
import CustomersTable from './components/customersTable';

const profitData = [
  { period: '7D', value: 2149350, percentage: 10 },
  { period: '14D', value: 2149350, percentage: 10 },
  { period: '1M', value: 2149350, percentage: 10 },
  { period: '3M', value: 2149350, percentage: 10 },
  { period: '1Y', value: 2149350, percentage: 10 },
  { period: 'ALL', value: 2149350, percentage: 10 },
];

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));
const EditIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: '18px',
  height: '18px',
  '&:hover': {
    backgroundColor: '#1E6569',
  },
}));
const StyledButton = styled(Button)(({ isactive, theme }) => ({
  color: isactive ? theme.palette.success.contrastText : '#757575',
}));

function Dashboard(props) {
  const { t } = useTranslation('dashboardPage');
  const user = useSelector(selectUser);

  return (
    <Root
      content={
        <div className="w-full p-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1">
              <Typography className="font-semibold text-[32px]">Dashboard</Typography>
            </div>
            <div className="col-span-1 grid grid-cols-1 md:grid-cols-3 gap-12 ">
              <TotalCard value={100000} />
              <ActiveCard value={100000} />
              <InActiveCard value={100000} />
            </div>
          </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 mt-[42px]">
            <CapitalAmountCard value={2350105.54} />
            <WalletBalanceCard value={2350105.54} />
            <UnrealizedCard value={-2350105.54} />
            <MarginBalanceCard value={2350105.54} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-[42px]">
            <div className="col-span-1" />
            <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-16">
              <CustomerProfitCard value={2350105.54} />
              <ZerolossProfitCard value={2350105.54} />
            </div>
          </div>
          <div className="mt-[24px]">
            <CustomersTable />
          </div>
        </div>
      }
      scroll="content"
    />
  );
}

export default Dashboard;

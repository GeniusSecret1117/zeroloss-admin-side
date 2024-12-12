import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';
import { Typography } from '@mui/material';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ProfitTable from './components/profitTable';

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

function DailyProfit(props) {
  const { t } = useTranslation('dailyProfitPage');
  const user = useSelector(selectUser);

  return (
    <Root
      content={
        <div className="w-full container p-12">
          <div className="flex items-center mt-[20px]">
            <AccountBalanceWalletOutlinedIcon className="text-[40px] text-[#032123]" />
            <Typography className="font-semibold text-[40px] ml-8" color="primary">
              Daily Profit
            </Typography>
          </div>
          <div className="mt-[24px]">
            <ProfitTable />
          </div>
        </div>
      }
      scroll="content"
    />
  );
}

export default DailyProfit;

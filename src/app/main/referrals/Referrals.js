import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'app/store/userSlice';
import { Typography } from '@mui/material';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import { formatNumberWithDecimal } from '@fuse/utils';
import TotalCard from './components/totalCard';
import ActiveCard from './components/activeCard';
import InactiveCard from './components/InactiveCard';
import ProfitCard from '../dashboard/components/profitCard';
import ReferralChart from './components/referralChart';
import ReferralsTable from './components/referralsTable';

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

function ReferralsPage(props) {
  const { t } = useTranslation('referralsPage');
  const user = useSelector(selectUser);

  return (
    <Root
      content={
        <div className="w-full container p-12">
          <div className="flex items-center mt-[20px]">
            <GroupAddOutlinedIcon className="text-[40px] text-[#032123]" />
            <Typography className="font-semibold text-[40px] ml-8" color="primary">
              Referrals
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[12px]">
            <TotalCard value={235010} />
            <ActiveCard value={23501} />
            <InactiveCard value={23501} />
          </div>
          <div className="mt-[32px] grid grid-cols-1 md:grid-cols-2 gap-x-16">
            <div>
              <Typography className="font-medium text-[14px]">Total Referral Paid</Typography>
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
          <div className="mt-[24px]">
            <ReferralChart />
          </div>
          <div className="mt-[24px]">
            <ReferralsTable />
          </div>
        </div>
      }
      scroll="content"
    />
  );
}

export default ReferralsPage;

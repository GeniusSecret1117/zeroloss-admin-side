import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';
import Typography from '@mui/material/Typography';
import { formatNumber } from '@fuse/utils';
import styled from '@emotion/styled';
import OrdersTable from '../components/ordersTable';

const HeaderTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '16px',
  fontWeight: '400',
}));

const OrdersTab = () => {
  const user = useSelector(selectUser);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#DCE0DD] rounded-[12px] p-[12px] gap-[12px] bg-[#F3F9F7]">
          <div>
            <HeaderTitle>Sum of Open Positions</HeaderTitle>
            <div className="border border-[#C4F3D6] rounded-[6px] p-8 mt-[6px] text-center">
              <Typography color="success" className="font-semibold text-[24px] font-Mint">
                {formatNumber(25000.25)}
              </Typography>
            </div>
          </div>
          <div>
            <HeaderTitle>Profit Value</HeaderTitle>
            <div className="border border-[#C4F3D6] rounded-[6px] p-8 mt-[6px] bg-[#083A3C] text-center">
              <Typography color="secondary" className="font-semibold text-[24px] font-Mint">
                +{formatNumber(25000.25)}
              </Typography>
            </div>
          </div>
          <div>
            <HeaderTitle>Total Order Value</HeaderTitle>
            <div className="border border-[#C4F3D6] rounded-[6px] p-8 mt-[6px] text-center">
              <Typography color="success" className="font-semibold text-[24px] font-Mint">
                -{formatNumber(25000.25)}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[24px]">
        <OrdersTable />
      </div>
    </div>
  );
};

export default OrdersTab;

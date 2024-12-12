import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { formatNumber } from '@fuse/utils';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';

const CustomerProfitCard = (props) => {
  const { value } = props;
  return (
    <Paper className="flex w-full justify-between flex-wrap items-center p-[12px] rounded-[12px] bg-[#F3F9F7] border border-[#C4F3D6] shadow-none ">
      <div className="flex items-center flex-wrap">
        <Paper className="flex rounded-[8px] bg-[#DAEDE1] shadow-none w-[36px] h-[36px] items-center justify-center">
          <SupervisorAccountOutlinedIcon color="primary" />
        </Paper>
        <div className="ml-[12px]">
          <Typography className="font-semibold text-[12px]" color="primary">
            Customer Profit
          </Typography>
          <Typography className="font-bold text-[16px] font-Mint mt-4" color="primary">
            {formatNumber(value)}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

CustomerProfitCard.propTypes = {
  value: PropTypes.number,
};
export default CustomerProfitCard;

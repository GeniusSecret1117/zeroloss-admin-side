import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { formatNumber } from '@fuse/utils';

const ZerolossProfitCard = (props) => {
  const { value } = props;
  return (
    <Paper className="flex w-full justify-between flex-wrap items-center p-[12px] rounded-[12px] bg-[#41D87B] border border-[#C4F3D6] shadow-none ">
      <div className="flex items-center flex-wrap">
        <Paper className="flex rounded-[8px] bg-[#C4F3D6] shadow-none w-[36px] h-[36px] items-center justify-center">
          <img className="w-[18px] h-[18px]" src="assets/icons/zero.svg" alt="zero" />
        </Paper>
        <div className="ml-[12px]">
          <Typography className="font-semibold text-[12px]" color="primary">
            ZeroLoss Profit
          </Typography>
          <Typography className="font-bold text-[16px] font-Mint mt-4" color="primary">
            {formatNumber(value)}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

ZerolossProfitCard.propTypes = {
  value: PropTypes.number,
};
export default ZerolossProfitCard;

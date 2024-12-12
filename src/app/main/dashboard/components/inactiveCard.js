import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { formatNumberWithOutDecimal } from '@fuse/utils';
import PersonOffOutlinedIcon from '@mui/icons-material/PersonOffOutlined';

const InActiveCard = (props) => {
  const { value } = props;
  return (
    <Paper className="flex w-full justify-between flex-wrap items-center p-[12px] rounded-[12px] bg-[#E5E5E5] border border-[#CBC9C9] shadow-none ">
      <div className="flex items-center flex-wrap">
        <Paper className="flex rounded-[8px] bg-[#CBC9C9] shadow-none w-[36px] h-[36px] items-center justify-center">
          <PersonOffOutlinedIcon color="primary" />
        </Paper>
        <div className="ml-[12px]">
          <Typography className="font-semibold text-[12px]" color="primary">
            Inactive Customer
          </Typography>
          <Typography className="font-bold text-[16px] font-Mint mt-4" color="primary">
            {formatNumberWithOutDecimal(value)}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

InActiveCard.propTypes = {
  value: PropTypes.number,
};
export default InActiveCard;

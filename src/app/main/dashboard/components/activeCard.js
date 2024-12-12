import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { formatNumberWithOutDecimal } from '@fuse/utils';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';

const ActiveCard = (props) => {
  const { value } = props;
  return (
    <Paper className="flex w-full justify-between flex-wrap items-center p-[12px] rounded-[12px] bg-[#41D87B] border border-[#C4F3D6] shadow-none ">
      <div className="flex items-center flex-wrap">
        <Paper className="flex rounded-[8px] bg-[#C4F3D6] shadow-none w-[36px] h-[36px] items-center justify-center">
          <EmojiPeopleOutlinedIcon color="primary" />
        </Paper>
        <div className="ml-[12px]">
          <Typography className="font-semibold text-[12px]" color="primary">
            Active Customer
          </Typography>
          <Typography className="font-bold text-[16px] font-Mint mt-8" color="primary">
            {formatNumberWithOutDecimal(value)}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

ActiveCard.propTypes = {
  value: PropTypes.number,
};
export default ActiveCard;

import React from 'react';
import Typography from '@mui/material/Typography';
import { formatNumberWithDecimal } from '@fuse/utils';
import Button from '@mui/material/Button';

const UpdateInvest = (props) => {

  return (
    <div className="col-span-1 border border-[#C3D3CB] rounded-[12px] p-16 flex flex-col justify-center">
      <div className="rounded-[16px] bg-[#F3F9F7] p-16 grid grid-cols-1 lg:grid-cols-2 border border-[#DCE0DD] gap-16">
        <div className="col-span-1 flex flex-col justify-start">
          <Typography className="font-normal text-[14px]">Minimum Investment</Typography>
          <div className="border border-[#C2D1CB] rounded-[8px] w-full px-8 items-center text-[#083A3C] overflow-hidden">
            <Typography className="font-Mint text-[24px]">
              $
              <span className="font-Mint text-[32px] font-semibold">
                {formatNumberWithDecimal(2149350).integer}.
              </span>
              <span className="font-Mint text-[24px]">
                {formatNumberWithDecimal(2149350).decimal}
              </span>
            </Typography>
          </div>
        </div>
        <div className="col-span-1 bg-[#D7ECE2] border border-[#DCE0DD] rounded-[12px]">
          <div className="w-full h-[40px] bg-[#F0FEF7] rounded-t-[12px] justify-center items-center flex">
            <Typography className="font-semibold text-[20px]">Referral Commission</Typography>
          </div>
          <div className="flex flex-col gap-8 p-16 mb-16">
            <div className="flex flex-col items-center justify-center">
              <Typography className="text-[#3D5857] font-normal text-[14px]">Default Commission</Typography>
              <div className="rounded-[6px] h-[40px] my-4 w-full border border-[#0321234D] flex items-center justify-center">
                <Typography className="font-Mint font-semibold text-[20px] text-[#E65100]">
                  {formatNumberWithDecimal(50).integer}.
                  <span className="text-[16px]">{formatNumberWithDecimal(50).decimal}</span>%
                </Typography>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Typography className="text-[#3D5857] font-normal text-[14px]"> &gt;500K Investments</Typography>
              <div className="rounded-[6px] h-[40px] my-4 w-full border border-[#0321234D] flex items-center justify-center">
                <Typography className="font-Mint font-semibold text-[20px]" color="primary">
                  {formatNumberWithDecimal(50).integer}.
                  <span className="text-[16px]">{formatNumberWithDecimal(50).decimal}</span>%
                </Typography>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Typography className="text-[#3D5857] font-normal text-[14px]">&gt;1M Investments</Typography>
              <div className="rounded-[6px] h-[40px] my-4 w-full border border-[#0321234D] flex items-center justify-center">
                <Typography className="font-Mint font-semibold text-[20px] text-[#FFA500]">
                  {formatNumberWithDecimal(50).integer}.
                  <span className="text-[16px]">{formatNumberWithDecimal(50).decimal}</span>%
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        variant="contained"
        color="secondary"
        className="w-full mt-16 font-medium text-[16px]"
        aria-label="Update"
        size="large"
      >
        Update
      </Button>
    </div>
  );
};

export default UpdateInvest;

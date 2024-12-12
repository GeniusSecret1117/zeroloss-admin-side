import React from 'react';
import Typography from '@mui/material/Typography';
import { formatNumberWithDecimal } from '@fuse/utils';
import IconButton from '@mui/material/IconButton';
import CopyAllOutlinedIcon from '@mui/icons-material/CopyAllOutlined';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { SiBinance } from "react-icons/si";
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

const BinanceCard = (props) => {

  return (
    <div className="col-span-3 bg-[#E1F5EB] rounded-[12px] p-16 flex flex-col justify-center w-full">
      <div className="flex mt-[20px] gap-16 items-center">
        <img className="mx-8" src="assets/icons/whitelist.svg" alt="whitelist" />
        <div className="w-[calc(100%-60px)]">
          <Typography className="font-medium text-[14px]">
            IP address (Allow the below IPs on your Binance API whitelist)
          </Typography>
          <div className="rounded-[8px] border border-[#75757577] bg-[#F0FEF7] px-[8px] my-4">
            <div className="flex items-center justify-between w-full">
              <Typography
                className="font-normal text-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[#374D4E]"
                sx={{ flexGrow: 1, marginRight: '8px' }}
              >
                192.0.2.1 192.0.2.1 192.0.2.1 192.0.2.1 192.0.2.1 192.0.2.1 192.0.2.1 192.0.2.1
                192.0.2.1 192.0.2.1 192.0.2.1 192.0.2.1 192.0.2.1 192.0.2.1 192.0.2.1 192.0.2.1
              </Typography>
              <IconButton color="primary">
                <CopyAllOutlinedIcon className="text-[20px]" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <Divider
        sx={{
          borderStyle: 'dashed', // Make the divider dashed
        }}
        className="my-8 border-[#C3D3CB]" // Apply Tailwind CSS for margin and color
      />
      <div className="flex justify-center">
        <div className="flex items-center gap-8 rounded-[4px] bg-[#FFD0D9] py-4 px-8">
          <ReportProblemOutlinedIcon className="text-[24px] text-[#FF143E]" />
          <Typography className="font-medium text-[14px] text-[#FF143E]">
            Strict Warning:&nbsp;<span className="font-bold">DO NOT ENABLE WITHDRAWAL OPTION.</span>
          </Typography>
        </div>
      </div>
      <div className="flex mt-[20px] gap-16 items-center">
        <img className="mx-8" src="assets/icons/api.svg" alt="api" />
        <div className="w-[calc(100%-60px)]">
          <div className="flex items-center gap-4">
            <SiBinance className="text-[16px] text-[#EFBB12]" />
            <Typography className="font-medium text-[14px]">
              <span className="text-[#EFBB12]">BINANCE</span> &nbsp;API Key
            </Typography>
          </div>
          <div className="rounded-[8px] border border-[#C3D3CB] px-[8px] my-4">
            <div className="flex items-center justify-between w-full gap-8">
              <Typography
                className="font-normal text-[16px] overflow-hidden text-[#374D4E]"
              >
                BENwF2cAFbpFeoe....Cgz4IRJXF5QOBENwF2RJXF5QO
              </Typography>
              <IconButton color="primary">
                <ContentCopyOutlinedIcon className="text-[20px]" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[20px] gap-16 items-center">
        <img className="mx-8" src="assets/icons/secret.svg" alt="secret" />
        <div className="w-[calc(100%-60px)]">
          <div className="flex items-center gap-4">
            <SiBinance className="text-[16px] text-[#EFBB12]" />
            <Typography className="font-medium text-[14px]">
              <span className="text-[#EFBB12]">BINANCE</span> &nbsp;Secret Key
            </Typography>
          </div>
          <div className="rounded-[8px] border border-[#C3D3CB] px-[8px] my-4">
            <div className="flex items-center justify-between w-full gap-8">
              <Typography
                className="font-normal text-[16px] overflow-hidden text-[#374D4E]"
              >
                BENwF2cAFbpFeoe....Cgz4IRJXF5QOBENwF2RJXF5QO
              </Typography>
              <IconButton color="primary">
                <ContentCopyOutlinedIcon className="text-[20px]" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        <div className="flex items-center justify-center">
          <Button variant="contained" color="secondary" className="font-medium text-[16px]">
            Connect BINANCE
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Typography className="font-medium text-[16px]">Connection Status</Typography>
          <div className="border border-[#41D87B] bg-gradient-to-r from-[#AAFFA9] to-[#11FFBD] text-[16px] font-medium flex items-center justify-center gap-8 rounded-[6px] py-8 px-16">
            Connected
            <TaskAltOutlinedIcon className="text-[24px]" />
          </div>
        </div>
      </div>
    </div>

  );
};

export default BinanceCard;

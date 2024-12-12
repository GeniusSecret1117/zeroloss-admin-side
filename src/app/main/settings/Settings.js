import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';
import { Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { PiLinkSimpleBold, PiTelegramLogo } from 'react-icons/pi';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import CopyAllOutlinedIcon from '@mui/icons-material/CopyAllOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { FaWhatsapp } from 'react-icons/fa';
import Checkbox from '@mui/material/Checkbox';
import { RiFacebookLine, RiTwitterXLine } from 'react-icons/ri';
import { LuInstagram } from 'react-icons/lu';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import clsx from 'clsx';
import UpdateIP from './components/UdateIP';
import UpdateInvest from './components/UdateInvest';
import UpdateEmail from './components/UdateEmail';
import BinanceCard from './components/BinanceCard';


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


function Settings(props) {
  const { t } = useTranslation('profilePage');
  const user = useSelector(selectUser);

  return (
    <Root
      content={
        <div className="w-full container p-[12px]">
          <div className="flex items-center mt-[20px]">
            <SettingsOutlinedIcon className="text-[40px] text-[#032123]" />
            <Typography className="font-semibold text-[40px] ml-8" color="primary">
              Global Settings
            </Typography>
          </div>
          <UpdateIP />
          <Divider
            sx={{
              borderStyle: 'dashed', // Make the divider dashed
            }}
            className="my-32 border-gray-300" // Apply Tailwind CSS for margin and color
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <UpdateInvest />
            <UpdateEmail />
          </div>
          <Divider
            sx={{
              borderStyle: 'dashed', // Make the divider dashed
            }}
            className="my-40 border-gray-300" // Apply Tailwind CSS for margin and color
          />
          <div className="flex items-center mt-[20px]">
            <PiLinkSimpleBold className="text-[24px] text-[#032123]" />
            <Typography className="font-semibold text-[24px] ml-8">
              Connect Admin Wallet to BINANCE
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
            <div className="col-span-2 py-16 flex flex-col justify-center">
              <Typography className="font-semibold text-[20px]">
                Binance API Connection
              </Typography>
              <Typography className="font-normal text-[16px] mt-8">
                An application programming interface (API) establishes an online connection between a data provider and an end-user. For financial markets, APIs interface trading algorithms or models and an exchange's and/or broker's platform. An API is essential to implementing an automated trading strategy.
              </Typography>
              <ul className="list-disc mt-20 ml-20 text-[#2C3ECA]">
                <li className="my-8">
                  <Link href="#" target="_blank" className="!text-[#2C3ECA]">
                    How to Open a Binance Futures Account?
                  </Link>
                </li>
                <li className="my-8">
                  <Link href="#" target="_blank" className="!text-[#2C3ECA]">
                    How to Create API Keys & add IP address on Binance ?
                  </Link>
                </li>
                <li className="my-8">
                  <Link href="#" target="_blank" className="!text-[#2C3ECA]">
                    How to Transfer Funds to the Futures Wallet?
                  </Link>
                </li>
                <li className="my-8">
                  <Link href="#" target="_blank" className="!text-[#2C3ECA]">
                    How to Secure Your API Keys with IP Whitelisting?
                  </Link>
                </li>
                <li className="my-8">
                  <Link href="#" target="_blank" className="!text-[#2C3ECA]">
                    What to Do if API Keys Stop Working?
                  </Link>
                </li>
              </ul>
            </div>
            <BinanceCard />
          </div>
        </div>
      }
      scroll="content"
    />
  );
}

export default Settings;

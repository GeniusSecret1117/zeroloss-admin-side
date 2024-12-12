import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'app/store/userSlice';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import CapitalCard from './components/CapitalCard';
import NormalCondition from './components/NormalCondition';
import MildCondition from './components/MildCondition';
import CriticalCondition from './components/CriticalCondition';

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

function TradingSettings(props) {
  const { t } = useTranslation('tradingSettingsPage');
  const user = useSelector(selectUser);

  return (
    <Root
      content={
        <div className="w-full container p-12">
          <CapitalCard />
          <Divider
            sx={{
              borderStyle: 'dashed', // Make the divider dashed
            }}
            className="my-32 border-[#C3D3CB]" // Apply Tailwind CSS for margin and color
          />
          <NormalCondition />
          <Divider
            sx={{
              borderStyle: 'dashed', // Make the divider dashed
            }}
            className="my-48 border-[#C3D3CB]" // Apply Tailwind CSS for margin and color
          />
          <MildCondition />
          <Divider
            sx={{
              borderStyle: 'dashed', // Make the divider dashed
            }}
            className="my-48 border-[#C3D3CB]" // Apply Tailwind CSS for margin and color
          />
          <CriticalCondition />
        </div>
      }
      scroll="content"
    />
  );
}

export default TradingSettings;

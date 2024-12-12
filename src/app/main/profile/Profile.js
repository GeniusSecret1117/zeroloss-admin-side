import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'app/store/userSlice';
import { Typography, Button } from '@mui/material';
import PersonalInformationCard from './components/PersonalInformtionCard';
import SocilaMediaCard from './components/SocilaMediaCard';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

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
function Profile(props) {
  const { t } = useTranslation('profilePage');
  const user = useSelector(selectUser);

  return (
    <Root
      content={
        <div className="w-full container pt-[24px]">
          <div className="rounded-[16px] bg-[#F3F9F7] p-[24px]">
            <Typography className="font-semibold text-[40px]">Good Morning, David</Typography>
            <Typography component="p" className="text-[20px] font-normal">
              Welcome to&nbsp;
              <span className="font-HandelGothic font-medium text-[#64B337]">ZEROLOSS</span>
              &nbsp;Dashboard
            </Typography>
            <Typography className="text-[20px] font-normal">
              Complete Your Profile First
            </Typography>
            <div className="rounded-[12px] border border-[#D0D7D3] p-[24px] mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1 ">
                <Typography className="text-[20px] font-semibold">
                  Your Photo
                </Typography>
                <Typography className="text-[16px] font-normal">
                  This will be displayed on your profile
                </Typography>
                <div className="flex gap-8 mt-[12px]">
                  <Button
                    variant="outlined"
                    className="font-medium"
                    size="medium"
                    component="label"
                    role={undefined}
                    tabIndex={-1}
                  >
                    Upload New
                    <VisuallyHiddenInput type="file" />
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className="font-medium"
                    size="medium"
                  >
                    Save
                  </Button>
                </div>
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <div className="flex gap-8">
                  <Typography component="p" className="text-[16px] font-normal">
                    <span className="font-HandelGothic">ZEROLOSS</span>
                    &nbsp;ID:
                  </Typography>
                  <Typography className="text-[16px] font-semibold">
                    778769435
                  </Typography>
                </div>
                <div className="flex gap-8 mt-8">
                  <Typography component="p" className="text-[16px] font-normal">
                    <span className="font-medium">BINANCE</span>
                    &nbsp;ID:
                  </Typography>
                  <Typography className="text-[16px] font-semibold">
                    778769435
                  </Typography>
                </div>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
              <PersonalInformationCard />
              <SocilaMediaCard />
            </div>
            <div className='flex justify-center'>
              <Button
                variant="contained"
                color="secondary"
                className="mt-16 font-medium text-[16px] min-w-[280px]"
                aria-label="Update"
                type="submit"
                size="large"
              >
                Update
              </Button>
            </div>
          </div>
        </div>
      }
      scroll="content"
    />
  );
}

export default Profile;

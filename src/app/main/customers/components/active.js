import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { formatNumberWithDecimal } from '@fuse/utils';
import Button from '@mui/material/Button';

const ActiveSwitch = ({ checked, onChange, label }) => {
  return (
    <div className="relative w-[100px] h-[26px] flex items-center justify-center">
      {/* Background text centered */}
      <span
        className={`absolute text-[16px] z-10 text-white cursor-pointer ${checked ? 'pr-[20px]' : 'pl-[20px]'
          }`}
        onClick={() => onChange({ target: { checked: !checked } })}
      >
        {label}
      </span>
      <Switch
        checked={checked}
        onChange={onChange}
        sx={{
          width: 100,
          height: 26,
          padding: 0,
          overflow: 'hidden',
          '& .MuiSwitch-switchBase': {
            padding: '5px',
            top: '50%',
            transform: 'translateY(-50%)',
            '&.Mui-checked': {
              transform: 'translate(67px, -50%)',
            },
          },
          '& .MuiSwitch-thumb': {
            width: 22,
            height: 22,
            backgroundColor: 'white',
          },
          '& .MuiSwitch-track': {
            borderRadius: 13, // Rounded corners
            backgroundColor: checked ? '#083A3C' : '#1cc4ca', // Active and inactive background colors
            opacity: 1,
            boxSizing: 'border-box',
          },
          '& .MuiSwitch-track.Mui-checked': {
            backgroundColor: '#083A3C !important', // Active background
          },
          '& .MuiSwitch-track:not(.Mui-checked)': {
            opacity: 1,
            backgroundColor: checked ? '#083A3C' : 'grey !important',
          },
        }}
      />
    </div>
  );
};

const OnOffSwitch = ({ checked, onChange, label }) => {
  return (
    <div className="relative w-[64px] h-[26px] flex items-center justify-center">
      {/* Background text centered */}
      <span
        className={`absolute text-[16px] z-10 text-white cursor-pointer ${checked ? 'pr-[20px]' : 'pl-[20px]'
          }`}
        onClick={() => onChange({ target: { checked: !checked } })}
      >
        {label}
      </span>
      <Switch
        checked={checked}
        onChange={onChange}
        sx={{
          width: 64,
          height: 26,
          padding: 0,
          overflow: 'hidden',
          '& .MuiSwitch-switchBase': {
            padding: '5px',
            top: '50%',
            transform: 'translateY(-50%)',
            '&.Mui-checked': {
              transform: 'translate(32px, -50%)',
            },
          },
          '& .MuiSwitch-thumb': {
            width: 22,
            height: 22,
            backgroundColor: 'white',
          },
          '& .MuiSwitch-track': {
            borderRadius: 13, // Rounded corners
            backgroundColor: checked ? '#083A3C' : '#1cc4ca', // Active and inactive background colors
            opacity: 1,
            boxSizing: 'border-box',
          },
          '& .MuiSwitch-track.Mui-checked': {
            backgroundColor: '#083A3C !important', // Active background
          },
          '& .MuiSwitch-track:not(.Mui-checked)': {
            opacity: 1,
            backgroundColor: checked ? '#083A3C' : 'grey !important',
          },
        }}
      />
    </div>
  );
};

const Active = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isOnOffChecked, setIsOnOffChecked] = useState(false);

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleOnOffSwitchChange = (event) => {
    setIsOnOffChecked(event.target.checked);
  };

  return (
    <div className="col-span-1">
      <div className="rounded-[16px] bg-[#D7ECE2] p-10 grid grid-cols-1 sm:grid-cols-2 border border-[#DCE0DD] gap-20">
        <div className="col-span-1 flex gap-8 items-center">
          <Typography className="font-semibold text-[20px]">Active Status: </Typography>
          <ActiveSwitch
            checked={isChecked}
            onChange={handleSwitchChange}
            label={isChecked ? 'Active' : 'Deactive'}
          />
        </div>
        <div className="col-span-1 flex gap-8 items-center justify-end">
          <Typography className="font-normal font-HandelGothic text-[16px]" color="secondary">
            ZEROLOSS
          </Typography>
          <OnOffSwitch
            checked={isOnOffChecked}
            onChange={handleOnOffSwitchChange}
            label={isOnOffChecked ? 'ON' : 'OFF'}
          />
        </div>
      </div>
      <div className="rounded-[16px] bg-[#F3F9F7] p-16 grid grid-cols-1 md:grid-cols-2 border border-[#DCE0DD] gap-16 mt-12">
        <div className="col-span-1 flex flex-col justify-center">
          <Typography className="font-normal text-[14px]">Capital Amount</Typography>
          <div className="border border-[#C2D1CB] rounded-[8px] w-full px-8 items-center">
            <Typography className="font-Mint text-[24px]" color="primary">
              $
              <span className="font-Mint text-[32px] font-semibold" color="primary">
                {formatNumberWithDecimal(2149350).integer}
              </span>
              <span className="font-Mint text-[24px]" color="primary">
                .{formatNumberWithDecimal(2149350).decimal}
              </span>
            </Typography>
          </div>
        </div>
        <div className="col-span-1 bg-[#D7ECE2] border border-[#DCE0DD] rounded-[12px]">
          <div className="w-full h-[40px] bg-[#F0FEF7] rounded-t-[12px] justify-center items-center flex">
            <Typography className="font-semibold text-[20px]">Profit Sharing</Typography>
          </div>
          <div className="flex flex-col gap-8 p-16 mb-16">
            <div className="flex flex-col items-center justify-center">
              <Typography className="text-[#3D5857] font-normal text-[14px]">Customer %</Typography>
              <div className="rounded-[6px] h-[40px] my-4 w-full border border-[#0321234D] flex items-center justify-center">
                <Typography className="font-Mint font-semibold text-[20px] text-[#E65100]">
                  {formatNumberWithDecimal(50).integer}.
                  <span className="text-[16px]">{formatNumberWithDecimal(50).decimal}</span>%
                </Typography>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Typography className="text-[#3D5857] font-normal text-[14px]">Zeroloss %</Typography>
              <div className="rounded-[6px] h-[40px] my-4 w-full border border-[#0321234D] flex items-center justify-center">
                <Typography className="font-Mint font-semibold text-[20px]" color="primary">
                  {formatNumberWithDecimal(50).integer}.
                  <span className="text-[16px]">{formatNumberWithDecimal(50).decimal}</span>%
                </Typography>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Typography className="text-[#3D5857] font-normal text-[14px]">Referral %</Typography>
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

export default Active;

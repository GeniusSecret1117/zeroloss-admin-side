import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';

export const ActiveSwitch = ({ checked, onChange, label }) => {
  return (
    <div className="relative w-[100px] h-[26px] flex items-center justify-center">
      {/* Background text centered */}
      <span
        className={`absolute text-[16px] font-semibold z-10 cursor-pointer ${
          checked ? 'pr-[20px] text-white ' : 'pl-[20px] text-[#ECFBF2]'
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
            backgroundColor: checked ? '#41D87B' : '#A0B6A8', // Active and inactive background colors
            opacity: 1,
            boxSizing: 'border-box',
          },
          '& .MuiSwitch-track.Mui-checked': {
            backgroundColor: '#41D87B !important', // Active background
          },
          '& .MuiSwitch-track:not(.Mui-checked)': {
            opacity: 1,
            backgroundColor: checked ? '#41D87B' : '#A0B6A8 !important',
          },
        }}
      />
    </div>
  );
};

export const OnOffSwitch = ({ checked, onChange, label, disabled }) => {
  return (
    <div className="relative w-[64px] h-[26px] flex items-center justify-center">
      {/* Background text centered */}
      <span
        className={`absolute text-[16px] z-10 text-white ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${
          checked ? 'pr-[20px]' : 'pl-[20px]'
        }`}
        onClick={() => disabled ? null : onChange({ target: { checked: !checked } })}
      >
        {label}
      </span>
      <Switch
        checked={checked}
        onChange={onChange}
        disabled={disabled}
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
            backgroundColor: checked ? '#083A3C' : '#FF143E !important',
          },
        }}
      />
    </div>
  );
};

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '16px',
  fontWeight: '400',
}));

export const SellButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF143E',
  color: '#FBFFFD',
  '&:hover': {
    backgroundColor: '#e00e36',
  },
}));


export const CustomOutlinedInput = styled(OutlinedInput)({
  height: '48px', // Set the height of the OutlinedInput
  '& input': {
    fontWeight: 600,
    fontSize: '24px',
    fontFamily: "'Mint', sans-serif",
    color: '#083A3C',
    height: '48px', // Ensure the input itself also matches the height
    padding: '0 14px', // Adjust padding to maintain visual appearance
    boxSizing: 'border-box', // Ensure padding does not increase total height
  },
});

export const CustomSelect = styled(Select)({
  height: '48px',
  '& .MuiSelect-select': {
    fontWeight: 600,
    fontSize: '24px',
    color: '#282B2B',
    padding: '5px 10px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
  },
});
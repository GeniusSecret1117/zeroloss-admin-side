import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { ActiveSwitch } from './Common';

const Capitalnput = styled(Input)(({ theme }) => ({
  flex: 1,
  '& .MuiInputBase-input': {
    fontSize: '24px',
    fontFamily: "'Mint', sans-serif",
    fontWeight: 600,
  },
}));

const StyledInputAdornment = styled(InputAdornment)({
  '& p': {
    fontSize: '24px !important',
    fontFamily: " 'Mint', sans-serif", // Set your font family
  }
});

const CapitalCard = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="mt-32">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <Typography className="font-medium text-[20px]">Capital Allocation</Typography>
        <div className="flex items-center gap-8">
          <div className="flex gap-8">
            <img src="assets/icons/zeroloss_icon.svg" alt="zero loss" />
            <Typography className="font-medium text-[16px]">
              <span className="text-[#64B337] font-normal font-HandelGothic">ZEROLOSS</span>
              &nbsp;(Bot)
            </Typography>
          </div>
          <ActiveSwitch
            checked={isChecked}
            onChange={handleSwitchChange}
            label={isChecked ? 'Active' : 'Deactive'}
          />
        </div>
      </div>
      <div className="border border-[#75757540] rounded-[12px] p-8 md:p-16 grid grid-cols-1 sm:grid-cols-5 gap-8 mt-16">
        <div className="col-span-1 sm:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Typography className="font-normal text-[16px]">Normal Condition</Typography>
            <Paper className="flex items-center w-full px-8 border border-[#FF6425] h-[50px] rounded-[8px] bg-[#FF64251A] shadow-none mt-4">
              <Capitalnput
                className="flex flex-1"
                type="number"
                disableUnderline
                defaultValue={30.00}
                fullWidth
                sx={{
                  color: '#FF6425', // Input text color
                  '& input': {
                    color: '#FF6425', // Ensures the input field text color is applied
                  },
                }}
                endAdornment={<StyledInputAdornment position="end" sx={{ '& p': { color: '#FF6425' } }}>%</StyledInputAdornment>}
              />
            </Paper>
          </div>
          <div className="col-span-1">
            <Typography className="font-normal text-[16px]">Mild Condition</Typography>
            <Paper className="flex items-center w-full px-8 border border-[#003C00] h-[50px] rounded-[8px] bg-[#003C001A] shadow-none mt-4">
              <Capitalnput
                className="flex flex-1"
                type="number"
                disableUnderline
                defaultValue={30.00}
                fullWidth
                sx={{
                  color: '#003C00', // Input text color
                  '& input': {
                    color: '#003C00', // Ensures the input field text color is applied
                  },
                }}
                endAdornment={<StyledInputAdornment position="end" sx={{ '& p': { color: '#003C00' } }}>%</StyledInputAdornment>}
              />
            </Paper>
          </div>
          <div className="col-span-1">
            <Typography className="font-normal text-[16px]">Critical Condition</Typography>
            <Paper className="flex items-center w-full px-8 border border-[#E65100] h-[50px] rounded-[8px] bg-[#E651001A] shadow-none mt-4">
              <Capitalnput
                className="flex flex-1"
                type="number"
                disableUnderline
                defaultValue={25.00}
                fullWidth
                sx={{
                  color: '#E65100', // Input text color
                  '& input': {
                    color: '#E65100', // Ensures the input field text color is applied
                  },
                }}
                endAdornment={<StyledInputAdornment position="end" sx={{ '& p': { color: '#E65100' } }}>%</StyledInputAdornment>}
              />
            </Paper>
          </div>
          <div className="col-span-1">
            <Typography className="font-normal text-[16px]">Reserve Condition</Typography>
            <Paper className="flex items-center w-full px-8 border border-[#FFA500] h-[50px] rounded-[8px] bg-[#FFA5001A] shadow-none mt-4">
              <Capitalnput
                className="flex flex-1"
                type="number"
                disableUnderline
                defaultValue={25.00}
                fullWidth
                sx={{
                  color: '#FFA500', // Input text color
                  '& input': {
                    color: '#FFA500', // Ensures the input field text color is applied
                  },
                }}
                endAdornment={<StyledInputAdornment position="end" sx={{ '& p': { color: '#FFA500' } }}>%</StyledInputAdornment>}
              />
            </Paper>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <Button
            variant="contained"
            color="secondary"
            className="font-medium text-[16px] min-w-[120px]"
            aria-label="Update"
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CapitalCard;

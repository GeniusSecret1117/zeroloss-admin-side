import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';
import Typography from '@mui/material/Typography';
import { formatNumber } from '@fuse/utils';
import { MdOutlineRadar } from 'react-icons/md';
import OutlinedInput from '@mui/material/OutlinedInput';
import styled from '@emotion/styled';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import PositionsTable from '../components/positionsTable';

const HeaderTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '16px',
  fontWeight: '400',
}));

const SellButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF143E',
  color: '#FBFFFD',
  '&:hover': {
    backgroundColor: '#e00e36',
  },
}));

const PositionTab = () => {
  const user = useSelector(selectUser);
  const [pairCurrency, setPairCurrency] = useState('usdt');
  const [leverage, setLeverage] = useState(3);

  const handleChange = (event) => {
    setPairCurrency(event.target.value);
  };

  const handleChangeLeverage = (event) => {
    setLeverage(event.target.value);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#DCE0DD] rounded-[16px] p-[12px] gap-[12px]">
          <div>
            <HeaderTitle>Balance USDT/USDC</HeaderTitle>
            <div className="border border-[#C4F3D6] rounded-[6px] p-8 mt-[6px] bg-[#F3F9F7] text-center">
              <Typography color="success" className="font-semibold text-[24px] font-Mint">
                {formatNumber(25000.25)}
              </Typography>
            </div>
          </div>
          <div>
            <HeaderTitle>Unrealized Profit</HeaderTitle>
            <div className="border border-[#C4F3D6] rounded-[6px] p-8 mt-[6px] bg-[#F3F9F7] text-center">
              <Typography color="secondary" className="font-semibold text-[24px] font-Mint">
                +{formatNumber(25000.25)}
              </Typography>
            </div>
          </div>
          <div>
            <HeaderTitle>Unrealized Loss</HeaderTitle>
            <div className="border border-[#F9BAC6] rounded-[6px] p-8 mt-[6px] bg-[#F9BAC633] text-center">
              <Typography className="font-semibold text-[24px] font-Mint text-[#FF143E]">
                -{formatNumber(25000.25)}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border border-[#DCE0DD] rounded-[16px] p-[12px] mt-[24px] grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-16">
        <div>
          <HeaderTitle>Coin Name</HeaderTitle>
          <OutlinedInput defaultValue="USDC" className="mt-[6px] w-full" />
        </div>
        <div>
          <HeaderTitle>Pair Currency</HeaderTitle>
          <FormControl className="mt-[6px] w-full">
            <Select
              value={pairCurrency}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="usdt">USDT</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <HeaderTitle>Order Amount</HeaderTitle>
          <OutlinedInput defaultValue="10000" className="mt-[6px] w-full" />
        </div>
        <div>
          <HeaderTitle>Take Profit %</HeaderTitle>
          <OutlinedInput defaultValue="1.5" className="mt-[6px] w-full" />
        </div>
        <div>
          <HeaderTitle>Leverage</HeaderTitle>
          <FormControl className="mt-[6px] w-full">
            <Select
              value={leverage}
              onChange={handleChangeLeverage}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={3}>3X</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <Button variant="contained" color="secondary" className="w-full font-medium">
            Buy/Long
          </Button>
          <SellButton variant="contained" className="w-full font-medium mt-[6px]">
            Sell/Short
          </SellButton>
        </div>
      </div>
      <div className="mt-[24px]">
        <PositionsTable />
      </div>
    </div>
  );
};

export default PositionTab;

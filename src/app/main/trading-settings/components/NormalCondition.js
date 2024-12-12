import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { formatNumber } from '@fuse/utils';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import { TableContainer } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { HeaderTitle, SellButton, ActiveSwitch, OnOffSwitch, CustomOutlinedInput, CustomSelect } from './Common';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri"
import { tabledata } from './tempdata';


const HeaderTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: '500', // Equivalent to 'font-semibold'
  fontSize: '16px',
  backgroundColor: '#B5E4E5',
  borderBottom: 'none', // Dashed border
  padding: theme.spacing(1.5), // Adjust padding if needed
}));

const BodyTableCell = styled(TableCell)(({ theme }) => ({
  '& p': {
    fontWeight: '500', // Equivalent to 'font-semibold'
    fontSize: '16px',
  },
  fontWeight: '500', // Equivalent to 'font-semibold'
  fontSize: '16px',
  borderBottom: '1px solid #75757540', // Dashed border
  padding: theme.spacing(2), // Adjust padding if needed
}));

const coins = [
  { key: 'btc', value: 'BTC' },
  { key: 'eth', value: 'ETH' },
  { key: 'bnb', value: 'BNB' },
  { key: 'xrp', value: 'XRP' },
  { key: 'usdt', value: 'USDT' },
  { key: 'usdc', value: 'USDC' },
  { key: 'ada', value: 'ADA' },
  { key: 'sol', value: 'SOL' },
  { key: 'dot', value: 'DOT' },
  { key: 'doge', value: 'DOGE' },
  { key: 'link', value: 'LINK' },
  { key: 'ltc', value: 'LTC' },
  { key: 'bch', value: 'BCH' },
  { key: 'avax', value: 'AVAX' },
  { key: 'mkr', value: 'MKR' },
  { key: 'ftm', value: 'FTM' },
  { key: 'near', value: 'NEAR' },
  { key: 'xmr', value: 'XMR' },
  { key: 'algo', value: 'ALGO' },
  { key: 'chz', value: 'CHZ' },
  { key: 'fil', value: 'FIL' },
];

const NormalCondition = () => {
  // State to track the current page
  const [pairCurrency, setPairCurrency] = useState('usdt');
  const [leverage, setLeverage] = useState(3);
  const [page, setPage] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState('btc');


  const handleChange = (event) => {
    setPairCurrency(event.target.value);
  };
  const handleCoinChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  const handleChangeLeverage = (event) => {
    setLeverage(event.target.value);
  };

  const itemsPerPage = 25;

  // Calculate the current data to display based on the page
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = tabledata.slice(indexOfFirstItem, indexOfLastItem);

  // Handle pagination change
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <div className="rounded-[16px] bg-[#E1FAEB] p-16">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Typography className="font-medium text-[20px]">Normal Allocation</Typography>
          <ActiveSwitch
            checked={isChecked}
            onChange={handleSwitchChange}
            label={isChecked ? 'Active' : 'Deactive'}
          />
        </div>
        <div className="w-full border border-[#75757540] rounded-[16px] p-[12px] mt-[24px] grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-16">
          <div>
            <HeaderTitle>Coin Name</HeaderTitle>
            <FormControl className="mt-[6px] w-full">
              <CustomSelect
                value={selectedCoin}
                onChange={handleCoinChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                {coins.map((coin) => (
                  <MenuItem key={coin.key} value={coin.key}>
                    {coin.value}
                  </MenuItem>
                ))}
              </CustomSelect>
            </FormControl>
          </div>
          <div>
            <HeaderTitle>Pair Currency</HeaderTitle>
            <FormControl className="mt-[6px] w-full">
              <CustomSelect
                value={pairCurrency}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                {coins.map((coin) => (
                  <MenuItem key={coin.key} value={coin.key}>
                    {coin.value}
                  </MenuItem>
                ))}
              </CustomSelect>
            </FormControl>
          </div>
          <div>
            <HeaderTitle>Order Amount</HeaderTitle>
            <CustomOutlinedInput defaultValue="10000" className="mt-[6px] w-full" />
          </div>
          <div>
            <HeaderTitle>Take Profit %</HeaderTitle>
            <CustomOutlinedInput defaultValue="1.5" className="mt-[6px] w-full" />
          </div>
          <div>
            <HeaderTitle>Leverage</HeaderTitle>
            <FormControl className="mt-[6px] w-full">
              <CustomSelect
                value={leverage}
                onChange={handleChangeLeverage}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value={3}>3X</MenuItem>
              </CustomSelect>
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
        <Divider
          className="mt-16 border-[#C3D3CB]" // Apply Tailwind CSS for margin and color
        />
        <Typography className="font-medium text-[20px] mt-12">List of Normal Condition Assets</Typography>
        <TableContainer>
          <Table className="w-full mt-20" sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <HeaderTableCell
                  align="center"
                  sx={{
                    borderRadius: '16px 0 0 16px',
                  }}
                >
                  SL NO.
                </HeaderTableCell>
                <HeaderTableCell align="center">Pair ON/OFF</HeaderTableCell>
                <HeaderTableCell align="right">Pairs</HeaderTableCell>
                <HeaderTableCell align="right">Order Amount</HeaderTableCell>
                <HeaderTableCell align="right">Take Profit%</HeaderTableCell>
                <HeaderTableCell align="right">Leverage</HeaderTableCell>
                <HeaderTableCell
                  align="right"
                  sx={{
                    borderRadius: '0 16px 16px 0',
                  }}
                >
                  Action
                </HeaderTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentData.map((item, index) => (
                <TableRow key={index}>
                  <BodyTableCell align="center">
                    {index + 1}
                  </BodyTableCell>
                  <BodyTableCell align="center">
                    <div className="flex justify-center">
                      <OnOffSwitch
                        checked={item.status}
                        onChange={() => { }}
                        label={item.status ? 'ON' : 'OFF'}
                        disabled={true}
                      />
                    </div>
                  </BodyTableCell>
                  <BodyTableCell align="right">
                    {item.pairs}
                  </BodyTableCell>
                  <BodyTableCell align="right" className="font-Mint font-semibold">
                    {formatNumber(item.amount)}
                  </BodyTableCell>
                  <BodyTableCell align="right" className="font-Mint">
                    +{formatNumber(item.profit)}%
                  </BodyTableCell>
                  <BodyTableCell align="right" >
                    {item.leverage}X
                  </BodyTableCell>
                  <BodyTableCell align="right" className="pr-0">
                    <div className="flex justify-end gap-2">
                      <IconButton>
                        <FaEdit className="text-[#032123] text-[14px]" />
                      </IconButton>
                      <IconButton>
                        <RiDeleteBin6Line className="text-[#032123] text-[14px]" />
                      </IconButton>
                    </div>
                  </BodyTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="flex justify-end mt-12 hidden">
          <Pagination
            count={Math.ceil(tabledata.length / itemsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="secondary"
            shape="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default NormalCondition;

import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { formatNumber, formatNumberWithOutDecimal } from '@fuse/utils';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { TableContainer } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Input from '@mui/material/Input';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import { PiLinkSimple } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { orderdata } from './tempdata';

const HeaderTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: '500', // Equivalent to 'font-semibold'
  fontSize: '14px',
  backgroundColor: '#B5E4E5',
  borderBottom: 'none', // Dashed border
  padding: theme.spacing(1.5), // Adjust padding if needed
}));
const BodyTableCell = styled(TableCell)(({ theme }) => ({
  '& p': {
    fontWeight: '500', // Equivalent to 'font-semibold'
    fontSize: '14px',
  },
  '& p.small': {
    fontSize: '12px',
  },
  fontWeight: '500', // Equivalent to 'font-semibold'
  fontSize: '14px',
  borderBottom: '1px solid #75757540', // Dashed border
  padding: theme.spacing(1.5), // Adjust padding if needed
}));

const statusOptions = [
  { value: 'today', label: 'Today' },
  { value: '7days', label: '7 Days' },
  { value: '1month', label: '1 Month' },
  { value: '3month', label: '3 Months' },
  { value: '1year', label: '1 Year' }
];

const CustomersTable = () => {
  // State to track the current page
  const [searchText, setSearchText] = useState('');
  const [status, setStatus] = useState('today');
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const itemsPerPage = 25;

  // Calculate the current data to display based on the page
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = orderdata.slice(indexOfFirstItem, indexOfLastItem);

  // Handle pagination change
  const handleChangePage = (event, value) => {
    setPage(value);
  };
  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <div className="mt-12">
        <div className="flex justify-between mb-12">
          <Typography className="font-medium text-[24px]">Customer Details</Typography>
          <div className="flex items-center gap-8">
            <FormControl sx={{ m: 0, p: 0, minWidth: 100 }}>
              <Select
                value={status}
                onChange={handleStatusChange}
                inputProps={{ 'aria-label': 'Without label' }}
                IconComponent={KeyboardArrowDownIcon} // Custom dropdown icon
                sx={{
                  borderRadius: '8px', // Set the border-radius for the select box
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderRadius: '8px', // Set border-radius for outlined variant
                  },
                  '& .MuiSelect-select': {
                    padding: 0,
                    px: 1.5,
                    borderRadius: '8px', // Also apply border-radius here
                  },
                }}
              >
                {statusOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    <ListItemText primary={option.label} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Paper className="flex p-4 items-center w-full px-16 py-4 border border-[#75757566] h-40 rounded-[8px] bg-transparent shadow-none max-w-[285px]">
              <FuseSvgIcon size={20} className="text-[#75757599]">
                heroicons-solid:search
              </FuseSvgIcon>
              <Input
                placeholder="Search"
                className="flex flex-1 px-8"
                disableUnderline
                fullWidth
                value={searchText}
                inputProps={{
                  'aria-label': 'Search',
                }}
                sx={{
                  '& input::placeholder': {
                    color: '#75757599',
                    opacity: 1,
                  },
                }}
                onChange={handleSearchText}
              />
            </Paper>
          </div>
        </div>
        <TableContainer>
          <Table className="w-full" sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <HeaderTableCell
                  sx={{
                    borderRadius: '16px 0 0 16px',
                  }}
                >
                  Status
                </HeaderTableCell>
                <HeaderTableCell>Client</HeaderTableCell>
                <HeaderTableCell>
                  <div className="flex gap-4 items-center justify-end">
                    Capital
                    <AccountBalanceWalletOutlinedIcon sx={{ fontSize: 18 }} color="primary" />
                  </div>
                </HeaderTableCell>
                <HeaderTableCell>
                  <div className="flex gap-4 items-center justify-end">
                    Profit
                    <PercentOutlinedIcon sx={{ fontSize: 18 }} color="primary" />
                  </div>
                </HeaderTableCell>
                <HeaderTableCell>
                  <div className="flex gap-4 items-center justify-end">
                    Client Profit
                    <AccountBalanceOutlinedIcon sx={{ fontSize: 18 }} color="primary" />
                  </div>
                </HeaderTableCell>
                <HeaderTableCell align="right">
                  <div className="flex gap-4 items-center justify-end">
                    Company Profit
                    <BarChartOutlinedIcon sx={{ fontSize: 18 }} color="primary" />
                  </div>
                </HeaderTableCell>
                <HeaderTableCell align="right">
                  <div className="flex gap-4 items-center justify-end">
                    Total Profit
                    <img className="" src="assets/icons/profit.svg" alt="profit" />
                  </div>
                </HeaderTableCell>
                <HeaderTableCell
                  align="right"
                  sx={{
                    borderRadius: '0 16px 16px 0',
                  }}
                >
                  <div className="flex gap-4 items-center justify-end">
                    Profit Avg (%)
                    <InsertChartOutlinedIcon sx={{ fontSize: 18 }} color="primary" />
                  </div>
                </HeaderTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentData.map((item, index) => (
                <TableRow key={index} className="cursor-pointer" onClick={() => navigate(`/dashboard/${item.id}`)}>
                  <BodyTableCell className="">
                    <div
                      className={clsx(
                        'inline-flex min-w-[106px] justify-center items-center rounded-[6px] p-[4px] gap-4',
                        item.status === 'connected'
                          ? 'bg-[#B8FED099] text-[#02752E]'
                          : 'bg-[#FF143E33] text-[#FF143E]'
                      )}
                    >
                      {item.status === 'connected' ? <><PiLinkSimple /> Connected</> : 'Failed'}
                    </div>
                  </BodyTableCell>
                  <BodyTableCell>
                    <Typography className="small">{item.name}</Typography>
                    <Typography className="small">{item.email}</Typography>
                    <Typography className="small">{item.id}</Typography>
                  </BodyTableCell>
                  <BodyTableCell align="right" className="font-Mint">
                    {formatNumberWithOutDecimal(item.capital)}
                  </BodyTableCell>
                  <BodyTableCell align="right" >
                    <Typography className="font-Mint">{item.profit_up} / <span className="text-[#FF6425]">{item.profit_down}</span></Typography>
                  </BodyTableCell>
                  <BodyTableCell align="right" className="font-Mint">
                    {formatNumberWithOutDecimal(item.client_profit)}
                  </BodyTableCell>
                  <BodyTableCell align="right" className="font-Mint text-[#FF6425]">
                    {formatNumberWithOutDecimal(item.company_profit)}
                  </BodyTableCell>
                  <BodyTableCell align="right" className="font-Mint">
                    {formatNumberWithOutDecimal(item.total_profit)}
                  </BodyTableCell>
                  <BodyTableCell align="right" className="font-Mint">
                    +{item.profit_avg}%
                  </BodyTableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={2} align="center">
                  <Typography className="font-semibold text-[14px]">Total</Typography>
                </TableCell>
                <TableCell align="right" className="font-Mint text-[14px] font-semibold">
                  {formatNumberWithOutDecimal(21000000)}
                </TableCell>
                <TableCell />
                <HeaderTableCell
                  sx={{
                    borderRadius: '16px 0 0 16px',
                  }}
                  align="right"
                >
                  <Typography className="font-Mint font-semibold text-[20px]">{formatNumberWithOutDecimal(49000000)}</Typography>
                </HeaderTableCell>
                <HeaderTableCell
                  align="right"
                >
                  <Typography className="font-Mint font-semibold text-[20px]">{formatNumberWithOutDecimal(49000000)}</Typography>
                </HeaderTableCell>
                <HeaderTableCell
                  sx={{
                    borderRadius: '0 16px 16px 0',
                  }}
                  align="right"
                >
                  <Typography className="font-Mint font-semibold text-[20px]">{formatNumberWithOutDecimal(49000000)}</Typography>
                </HeaderTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className="flex justify-end mt-12">
          <Pagination
            count={Math.ceil(orderdata.length / itemsPerPage)}
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

export default CustomersTable;

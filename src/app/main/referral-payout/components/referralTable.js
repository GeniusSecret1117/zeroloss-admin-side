import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { formatNumber, formatNumberWithOutDecimal } from '@fuse/utils';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { TableContainer } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import { referraldata } from './tempdata';


const HeaderTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: '1px solid #C6D9CD', // Dashed border
  borderLeft: '1px solid #C6D9CD', // Dashed border
  borderRight: '1px solid #C6D9CD', // Dashed border
  padding: theme.spacing(2),
  fontWeight: '700', // Equivalent to 'font-semibold'
  fontSize: '14px',
  '& p': {
    fontWeight: '700', // Equivalent to 'font-semibold'
    fontSize: '14px',
  },
}));
const BodyTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 400, // Equivalent to 'font-semibold'
  fontSize: '14px',
  borderBottom: '1px dashed #75757540', // Dashed border
  padding: theme.spacing(2), // Adjust padding if needed
}));

const BottomTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: '#B5E4E5',
  padding: theme.spacing(1.5),
  fontWeight: '600', // Equivalent to 'font-semibold'
  fontSize: '16px',
}));

const exportData = [
  {
    value: '',
    label: 'Export',
  },
  {
    value: 'excel',
    label: 'Excel',
  },
  {
    value: 'pdf',
    label: 'PDF',
  },
  {
    value: 'csv',
    label: 'CSV',
  },
];

const monthData = [
  {
    value: 'january',
    label: 'January',
  },
  {
    value: 'february',
    label: 'February',
  },
  {
    value: 'march',
    label: 'March',
  },
  {
    value: 'april',
    label: 'April',
  },
  {
    value: 'may',
    label: 'May',
  },
  {
    value: 'june',
    label: 'June',
  },
  {
    value: 'july',
    label: 'July',
  },
  {
    value: 'august',
    label: 'August',
  },
  {
    value: 'september',
    label: 'September',
  },
  {
    value: 'october',
    label: 'October',
  },
  {
    value: 'november',
    label: 'November',
  },
  {
    value: 'december',
    label: 'December',
  },
];

const paymentStatusData = [
  {
    value: 'fully_paid',
    label: 'Fully Paid',
  },
  {
    value: 'partially_paid',
    label: 'Partially Paid',
  },
  {
    value: 'not_paid',
    label: 'Not Paid',
  },
];

const yearData = [2024, 2023, 2022, 2021, 2020];

const ReferralTable = () => {
  // State to track the current page
  const [searchText, setSearchText] = useState('');

  const [exportType, setExportType] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleExportChange = (event) => {
    setExportType(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handlePaymentStatusChange = (event) => {
    setPaymentStatus(event.target.value);
  };

  const [page, setPage] = useState(1);

  const itemsPerPage = 5;
  const totalItems = referraldata.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = referraldata.slice(indexOfFirstItem, indexOfLastItem);

  // Handle previous button
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Handle next button
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <div className="rounded-[16px] bg-[#F3F9F7] border border-[#03212352] p-24">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-16 gap-8">
          <div className="flex flex-1 gap-8">
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
            <Button
              variant="contained"
              color="secondary"
              className="font-medium text-[16px]"
              aria-label="Search"
            >
              Search
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 items-end w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-8 items-center w-full sm:w-auto">
              <div className="flex flex-col gap-4 sm:w-[120px] w-full">
                <Typography className="font-mediun text-[14px] text-[#757575]">Select Month</Typography>
                <FormControl sx={{ m: 0, p: 0, width: '100%' }}>
                  <Select
                    value={month}
                    onChange={handleMonthChange}
                    IconComponent={KeyboardArrowDownIcon} // Custom dropdown icon
                    sx={{
                      borderRadius: '4px', // Set the border-radius for the select box
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '4px', // Set border-radius for outlined variant
                      },
                      '& .MuiSelect-select': {
                        padding: 0,
                        pl: 2,
                        borderRadius: '4px', // Also apply border-radius here
                      },
                    }}
                  >
                    {monthData.map((item) => (
                      <MenuItem value={item.value}>
                        <ListItemText primary={item.label} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="flex flex-col gap-4 sm:w-[120px] w-full">
                <Typography className="font-mediun text-[14px] text-[#757575]">Select Year</Typography>
                <FormControl sx={{ m: 0, p: 0, width: '100%' }}>
                  <Select
                    value={year}
                    onChange={handleYearChange}
                    IconComponent={KeyboardArrowDownIcon} // Custom dropdown icon
                    sx={{
                      borderRadius: '4px', // Set the border-radius for the select box
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '4px', // Set border-radius for outlined variant
                      },
                      '& .MuiSelect-select': {
                        padding: 0,
                        pl: 2,
                        borderRadius: '4px', // Also apply border-radius here
                      },
                    }}
                  >
                    {yearData.map((item) => (
                      <MenuItem value={item}>
                        <ListItemText primary={item} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="flex flex-col gap-4 sm:w-[160px] w-full">
                <Typography className="font-mediun text-[14px] text-[#757575]">Payment Status</Typography>
                <FormControl sx={{ m: 0, p: 0, width: '100%' }}>
                  <Select
                    value={paymentStatus}
                    onChange={handlePaymentStatusChange}
                    IconComponent={KeyboardArrowDownIcon} // Custom dropdown icon
                    sx={{
                      borderRadius: '4px', // Set the border-radius for the select box
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '4px', // Set border-radius for outlined variant
                      },
                      '& .MuiSelect-select': {
                        padding: 0,
                        pl: 2,
                        borderRadius: '4px', // Also apply border-radius here
                      },
                    }}
                  >
                    {paymentStatusData.map((item) => (
                      <MenuItem value={item.value}>
                        <ListItemText primary={item.label} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="flex flex-row sm:flex-col gap-8">
              <FormControl sx={{ m: 0, p: 0, width: 120 }}>
                <Select
                  value={exportType}
                  onChange={handleExportChange}
                  IconComponent={KeyboardArrowDownIcon} // Custom dropdown icon
                  sx={{
                    borderRadius: '4px', // Set the border-radius for the select box
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRadius: '8px', // Set border-radius for outlined variant
                    },
                    '& .MuiSelect-select': {
                      padding: 0,
                      pl: 2,
                      borderRadius: '4px', // Also apply border-radius here
                    },
                  }}
                >
                  {exportData.map((item) => (
                    <MenuItem value={item.value}>
                      <ListItemText primary={item.label} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="secondary"
                className="font-medium text-[16px]"
                aria-label="Search"
              >
                Export Now
              </Button>
            </div>
          </div>
        </div>
        <TableContainer className="border border-[#C6D9CD] rounded-[8px]">
          <Table className="w-full" sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <HeaderTableCell
                  align="center"
                  sx={{
                    borderLeft: 'none',
                  }}
                >
                  #
                </HeaderTableCell>
                <HeaderTableCell align="center">Week range</HeaderTableCell>
                <HeaderTableCell align="center">Binance ID</HeaderTableCell>
                <HeaderTableCell>Referral Details</HeaderTableCell>
                <HeaderTableCell align="center">Ref. Commission</HeaderTableCell>
                <HeaderTableCell align="right">Payable Amount</HeaderTableCell>
                <HeaderTableCell align="right">Paid Amount</HeaderTableCell>
                <HeaderTableCell align="center">Payment Status</HeaderTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentData.map((item, index) => (
                <TableRow key={index}>
                  <BodyTableCell
                    align="center"
                    className="font-semibold"
                  >
                    {index + 1}
                  </BodyTableCell>
                  <BodyTableCell
                    align="center"
                  >
                    {item.week_range}
                  </BodyTableCell>
                  <BodyTableCell
                    align="center"
                  >
                    <Typography className="font-semibold">{item.binance_id}</Typography>
                  </BodyTableCell>
                  <BodyTableCell
                  >
                    <Typography className="font-bold">{item.name}</Typography>
                    <Typography>{item.email}</Typography>
                    <Typography>{item.phone}</Typography>
                  </BodyTableCell>
                  <BodyTableCell
                    align="center"
                  >
                    <Typography className="font-semibold">{item.ref_commission} %</Typography>
                  </BodyTableCell>
                  <BodyTableCell
                    align="right"
                  >
                    <Typography className="font-semibold font-Mint">{formatNumber(item.payable_amount)}</Typography>
                  </BodyTableCell>
                  <BodyTableCell
                  >
                    <div className="flex justify-end border border-[#75757599] rounded-[4px] p-2">
                      <Typography className="font-semibold font-Mint">{formatNumber(item.paid_amount)}</Typography>
                    </div>
                  </BodyTableCell>
                  <BodyTableCell
                    align="center"
                  >
                    <div
                      className={clsx(
                        'inline-flex min-w-[105px] justify-center items-center border rounded-[4px] p-[4px] font-semibold gap-4',
                        item.payment_status === 'Complete'
                          ? 'border-[#41D87B]  bg-[#41D87B1A] text-[#41B76F]'
                          : 'border-[#FFA500]  bg-[#FFA5001A] text-[#FFA500]'
                      )}
                    >
                      {item.payment_status}
                      {item.payment_status === 'Complete' ? <CheckCircleOutlineOutlinedIcon /> : <PendingActionsOutlinedIcon />}
                    </div>
                  </BodyTableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={5} align="right">
                  <Typography className="font-semibold text-[14px]">Total</Typography>
                </TableCell>
                <BottomTableCell
                  sx={{
                    borderRadius: '16px 0 0 16px',
                  }}
                  align="right"
                >
                  <Typography className="font-Mint font-semibold text-[20px]">{formatNumber(67890.12)}</Typography>
                </BottomTableCell>
                <BottomTableCell
                  sx={{
                    borderRadius: '0 16px 16px 0',
                  }}
                  align="right"
                >
                  <Typography className="font-Mint font-semibold text-[20px]">{formatNumber(67890.12)}</Typography>
                </BottomTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className="flex justify-end mt-12 gap-8">
          <Button
            sx={{
              backgroundColor: '#75757566',
            }}
            variant="contained"
            startIcon={<ArrowBackIosNewOutlinedIcon />}
            onClick={handlePreviousPage}
            disabled={page === 1} // Disable button on the first page
          >
            Previous
          </Button>

          <Button
            sx={{
              backgroundColor: '#B5E4E5',
            }}
            variant="contained"
            endIcon={<ArrowForwardIosOutlinedIcon />}
            onClick={handleNextPage}
            disabled={page === totalPages} // Disable button on the last page
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReferralTable;

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
import { profitdata } from './tempdata';


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

const yearData = [2024, 2023, 2022, 2021, 2020];

const ProfitTable = () => {
  // State to track the current page
  const [searchText, setSearchText] = useState('');

  const [exportType, setExportType] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleExportChange = (event) => {
    setExportType(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const [page, setPage] = useState(1);

  const itemsPerPage = 5;
  const totalItems = profitdata.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = profitdata.slice(indexOfFirstItem, indexOfLastItem);

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
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="flex gap-8 items-center">
              <Typography className="font-mediun text-[14px] text-[#757575]">Select Year</Typography>
              <FormControl sx={{ m: 0, p: 0, width: '120px' }}>
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
              <FormControl sx={{ m: 0, p: 0, width: '120px' }}>
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
            <div className="flex gap-8">
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
                  sx={{
                    borderLeft: 'none',
                  }}
                >
                  Month
                </HeaderTableCell>
                <HeaderTableCell align="center">Zeroloss ID</HeaderTableCell>
                <HeaderTableCell>Customers Details</HeaderTableCell>
                <HeaderTableCell align="right">PNL Amount</HeaderTableCell>
                <HeaderTableCell align="right">Avg. Profit</HeaderTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentData.map((item, index) => (
                <TableRow key={index}>
                  <BodyTableCell
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    {item.date}
                  </BodyTableCell>
                  <BodyTableCell
                    align="center"
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    <Typography className="font-semibold">{item.zeroloss_id}</Typography>
                  </BodyTableCell>
                  <BodyTableCell
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    <Typography className="font-bold">{item.name}</Typography>
                    <Typography>{item.email}</Typography>
                    <Typography>{item.phone}</Typography>
                  </BodyTableCell>
                  <BodyTableCell
                    align="right"
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    <Typography className="font-bold font-semibold font-Mint">{formatNumber(item.pnl)}</Typography>
                    <Typography className="font-normal text-[12px]">{item.pnl_percentage}%</Typography>
                  </BodyTableCell>
                  <BodyTableCell
                    align="right"
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    <Typography className="font-semibold">{item.avg_profit}%</Typography>
                  </BodyTableCell>
                </TableRow>
              ))}
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

export default ProfitTable;

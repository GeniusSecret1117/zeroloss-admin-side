import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { formatNumber } from '@fuse/utils';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { TableContainer } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import IconButton from '@mui/material/IconButton';
import { RxCaretSort } from 'react-icons/rx';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { referraldata } from './tempdata';
import { fontFamily } from '@mui/system';

const HeaderTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: '700', // Equivalent to 'font-semibold'
  fontSize: '12px',
  borderBottom: '1px solid #C6D9CD', // Dashed border
  borderLeft: '1px solid #C6D9CD', // Dashed border
  borderRight: '1px solid #C6D9CD', // Dashed border
  padding: theme.spacing(1.5),
  '& p': {
    fontWeight: '700', // Equivalent to 'font-semibold'
    fontSize: '12px',
  },
}));
const BodyTableCell = styled(TableCell)(({ theme }) => ({
  '& p': {
    fontWeight: '600', // Equivalent to 'font-semibold'
    fontSize: '14px',
  },
  '& p.small': {
    fontWeight: '400',
  },
  '& p.number': {
    fontFamily: "'Mint', sans-serif",
  },
  borderBottom: '1px dashed #75757540', // Dashed border
  padding: theme.spacing(2), // Adjust padding if needed
}));

const ReferralsTable = () => {
  // State to track the current page
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  const [status, setStatus] = useState('all');

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const itemsPerPage = 25;

  // Calculate the current data to display based on the page
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = referraldata.slice(indexOfFirstItem, indexOfLastItem);

  // Handle pagination change
  const handleChangePage = (event, value) => {
    setPage(value);
  };
  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <div className="rounded-[16px] bg-[#F3F9F7] border border-[#03212352] p-24">
        <div className="flex justify-end mb-[12px] gap-8">
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
          <FormControl sx={{ m: 0, p: 0, minWidth: 96 }}>
            <Select
              value={status}
              onChange={handleStatusChange}
              displayEmpty
              placeholder="Status"
              inputProps={{ 'aria-label': 'Without label' }}
              IconComponent={KeyboardArrowDownIcon} // Custom dropdown icon
              sx={{
                borderRadius: '8px', // Set the border-radius for the select box
                '& .MuiOutlinedInput-notchedOutline': {
                  borderRadius: '8px', // Set border-radius for outlined variant
                },
                '& .MuiSelect-select': {
                  padding: 0,
                  pl: 1,
                  borderRadius: '8px', // Also apply border-radius here
                },
              }}
            >
              <MenuItem value="all">
                <ListItemText primary="All" />
              </MenuItem>
              <MenuItem value="active">
                <ListItemText primary="Active" />
              </MenuItem>
              <MenuItem value="inactive">
                <ListItemText primary="Inactive" />
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <TableContainer className="border border-[#C6D9CD] rounded-[8px]">
          <Table className="w-full" sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <HeaderTableCell
                  sx={{
                    borderLeft: 'none',
                  }}
                  align="center"
                >
                  #
                </HeaderTableCell>
                <HeaderTableCell>
                  <div className="flex items-center w-full justify-between">
                    <Typography>Date of Join</Typography>
                    <IconButton color="primary">
                      <RxCaretSort className="text-[20px]" />
                    </IconButton>
                  </div>
                </HeaderTableCell>
                <HeaderTableCell align="center">
                  ZeroLoss ID
                </HeaderTableCell>
                <HeaderTableCell>
                  Referred
                </HeaderTableCell>
                <HeaderTableCell>
                  <div className="flex items-center w-full justify-between">
                    <Typography>TTL</Typography>
                    <IconButton color="primary">
                      <RxCaretSort className="text-[20px]" />
                    </IconButton>
                  </div>
                </HeaderTableCell>
                <HeaderTableCell>
                  <div className="flex items-center w-full justify-between">
                    <Typography>Active</Typography>
                    <IconButton color="primary">
                      <RxCaretSort className="text-[20px]" />
                    </IconButton>
                  </div>
                </HeaderTableCell>
                <HeaderTableCell>
                  <div className="flex items-center w-full justify-between">
                    <Typography>Inactive</Typography>
                    <IconButton color="primary">
                      <RxCaretSort className="text-[20px]" />
                    </IconButton>
                  </div>
                </HeaderTableCell>
                <HeaderTableCell>
                  <div className="flex items-center w-full justify-between">
                    <Typography>Group Investment</Typography>
                    <IconButton color="primary">
                      <RxCaretSort className="text-[20px]" />
                    </IconButton>
                  </div>
                </HeaderTableCell>
                <HeaderTableCell sx={{ backgroundColor: '#B5E4E5' }}>
                  <div className="flex items-center w-full justify-between">
                    <Typography>Commission Earned</Typography>
                    <IconButton color="primary">
                      <RxCaretSort className="text-[20px]" />
                    </IconButton>
                  </div>
                </HeaderTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentData.map((item, index) => (
                <TableRow key={index}>
                  <BodyTableCell
                    align="center"
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    <Typography>{index + 1}</Typography>
                  </BodyTableCell>
                  <BodyTableCell
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    <Typography className="small">{item.date}</Typography>
                  </BodyTableCell>
                  <BodyTableCell
                    align="center"
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    <Typography>{item.id}</Typography>
                  </BodyTableCell>
                  <BodyTableCell
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    <Typography className="small">{item.name}</Typography>
                    <Typography className="small">{item.email}</Typography>
                    <Typography className="small">{item.phone}</Typography>
                  </BodyTableCell>
                  <BodyTableCell
                    align="right"
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    <Typography>{item.ttl}</Typography>
                  </BodyTableCell>
                  <BodyTableCell
                    align="center"
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    <div
                      className='inline-flex min-w-[58px] justify-center items-center font-semibold bg-[#083A3C] text-[#EBFBF3] text-[14px] rounded-[5px] p-[4px]'
                    >
                      {item.active}
                    </div>
                  </BodyTableCell>
                  <BodyTableCell
                    align="right"
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    <Typography>{item.inactive}</Typography>
                  </BodyTableCell>
                  <BodyTableCell
                    align="right"
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    <Typography className="number">{formatNumber(item.group_invest)}</Typography>
                  </BodyTableCell>
                  <BodyTableCell
                    sx={{ backgroundColor: '#C4F3D6' }}
                    align="right"
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    <Typography className="number">{formatNumber(item.commission_earned)}</Typography>
                  </BodyTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="flex justify-end mt-12">
          <Pagination
            count={Math.ceil(referraldata.length / itemsPerPage)}
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

export default ReferralsTable;

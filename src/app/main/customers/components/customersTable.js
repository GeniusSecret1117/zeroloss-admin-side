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
import IconButton from '@mui/material/IconButton';
import { RxCaretSort } from 'react-icons/rx';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCustomer } from '../store/stateSlice';
import { customersdata } from './tempdata';

const EditButton = styled(Button)({
  background: 'linear-gradient(90deg, #AAFFA9 0%, #11FFBD 100%)',
  width: '58px',
  height: '28px',
  minHeight: '28px',
  borderRadius: '6px',
  border: '1px solid #41D87B',
  padding: 0,
  minWidth: 0,
  transition: 'background 0.3s ease', // Smooth transition effect

  // Hover state styling
  '&:hover': {
    background: 'linear-gradient(90deg, #11FFBD 0%, #AAFFA9 100%)', // Reverse gradient on hover
    border: '1px solid #41D87B', // Maintain the border on hover
  },
});

const HeaderTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: '700', // Equivalent to 'font-semibold'
  fontSize: '12px',
  borderBottom: '1px solid #C6D9CD', // Dashed border
  borderLeft: '1px solid #C6D9CD', // Dashed border
  borderRight: '1px solid #C6D9CD', // Dashed border
  padding: theme.spacing(2),
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
  borderBottom: '1px dashed #75757540', // Dashed border
  padding: theme.spacing(2), // Adjust padding if needed
}));

const CustomersTable = () => {
  // State to track the current page
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  const [status, setStatus] = useState('');
  const dispatch = useDispatch();


  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const itemsPerPage = 25;

  // Calculate the current data to display based on the page
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = customersdata.slice(indexOfFirstItem, indexOfLastItem);

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
        <div className="grid grid-cols-1 md:grid-cols-2 mb-[12px] gap-8">
          <div className="col-span-1">
            <Typography className="text-[32px] font-medium">Customer’s List</Typography>
          </div>
          <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-1">
              <Paper className="flex p-4 items-center w-full px-16 py-4 border border-[#75757566] h-40 rounded-[8px] bg-transparent shadow-none">
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
            <div className="col-span-1 grid grid-cols-2 gap-8">
              <div className="col-span-1">
                <FormControl sx={{ m: 0, p: 0, width: '100%' }}>
                  <Select
                    value={status}
                    onChange={handleStatusChange}
                    IconComponent={KeyboardArrowDownIcon} // Custom dropdown icon
                    sx={{
                      borderRadius: '8px', // Set the border-radius for the select box
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '8px', // Set border-radius for outlined variant
                      },
                      '& .MuiSelect-select': {
                        padding: 0,
                        pl: 2,
                        borderRadius: '8px', // Also apply border-radius here
                      },
                    }}
                  >
                    <MenuItem value="">
                      <em>A/C Status</em>
                    </MenuItem>
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
              <div className="col-span-1">
                <FormControl sx={{ m: 0, p: 0, width: '100%' }}>
                  <Select
                    value={status}
                    onChange={handleStatusChange}
                    IconComponent={KeyboardArrowDownIcon} // Custom dropdown icon
                    sx={{
                      borderRadius: '8px', // Set the border-radius for the select box
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '8px', // Set border-radius for outlined variant
                      },
                      '& .MuiSelect-select': {
                        padding: 0,
                        pl: 2,
                        borderRadius: '8px', // Also apply border-radius here
                      },
                    }}
                  >
                    <MenuItem value="">
                      <em>Bot Status</em>
                    </MenuItem>
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
                  align="center"
                >
                  #
                </HeaderTableCell>
                <HeaderTableCell>
                  <div className="flex items-center gap-8">
                    <Typography>Date of Join</Typography>
                    <IconButton color="primary">
                      <RxCaretSort className="text-[20px]" />
                    </IconButton>
                  </div>
                </HeaderTableCell>
                <HeaderTableCell>
                  <div className="flex items-center gap-8">
                    <EmailOutlinedIcon sx={{ fontSize: 16 }} color="primary" />
                    <Typography>Customer Details</Typography>
                  </div>
                </HeaderTableCell>
                <HeaderTableCell align="center">A/C Status</HeaderTableCell>
                <HeaderTableCell align="center">Bot Status</HeaderTableCell>
                <HeaderTableCell>
                  <div className="flex items-center gap-8">
                    <EmailOutlinedIcon sx={{ fontSize: 16 }} color="primary" />
                    <Typography>Referred</Typography>
                  </div>
                </HeaderTableCell>
                <HeaderTableCell align="right">
                  <div className="flex items-center justify-end gap-8">
                    <Typography>Capital amount</Typography>
                    <IconButton color="primary">
                      <RxCaretSort className="text-[20px]" />
                    </IconButton>
                  </div>
                </HeaderTableCell>
                <HeaderTableCell align="center">
                  Customer %<br />
                  ZL% / Ref %
                </HeaderTableCell>
                <HeaderTableCell align="center">Action</HeaderTableCell>
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
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    <Typography className="!text-[16px] font-semibold">{item.name}</Typography>
                    <Typography className="small">{item.email}</Typography>
                    <Typography className="">{item.phone}</Typography>
                  </BodyTableCell>
                  <BodyTableCell
                    align="center"
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    <div
                      className={clsx(
                        'inline-flex min-w-[70px] justify-center items-center font-medium rounded-[6px] p-[4px] ',
                        item.ac_status === 'active'
                          ? 'bg-[#083A3C] text-[#47FE8D]'
                          : 'border border-[#FE2B5126] bg-[#FE2B511A] text-[#FE2B51]'
                      )}
                    >
                      {item.ac_status === 'active' ? 'Active' : 'Deactive'}
                    </div>
                  </BodyTableCell>
                  <BodyTableCell
                    align="center"
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    <div
                      className={clsx(
                        'inline-flex min-w-[70px] justify-center items-center font-medium rounded-[6px] p-[4px] ',
                        item.bot_status === 'active'
                          ? 'bg-[#083A3C] text-[#47FE8D]'
                          : 'border border-[#FE2B5126] bg-[#FE2B511A] text-[#FE2B51]'
                      )}
                    >
                      {item.bot_status === 'active' ? 'Active' : 'Deactive'}
                    </div>
                  </BodyTableCell>
                  <BodyTableCell
                    className={clsx(index === currentData.length - 1 && 'border-none', "text-[#032123CC]")}
                  >
                    <Typography className="small">{item.referred_name}</Typography>
                    <Typography className="small">{item.referred_email}</Typography>
                    <Typography className="small">{item.referred_phone}</Typography>
                  </BodyTableCell>
                  <BodyTableCell
                    className={clsx(index === currentData.length - 1 && 'border-none', "text-[16px] font-semibold font-Mint")}
                    align="right"
                  >
                    {formatNumber(item.capital_amount)}
                  </BodyTableCell>
                  <BodyTableCell
                    align="center"
                    className={clsx(index === currentData.length - 1 && 'border-none', "font-Mint font-semibold text-[14px]")}
                  >
                    <Typography className="text-[#E65100]">{item.customer_percentage}%</Typography>
                    <Typography className="text-[#003C00]">{item.zl_percentage}%</Typography>
                    <Typography className="text-[#FFA500]">{item.ref_percentage}%</Typography>
                  </BodyTableCell>

                  <BodyTableCell
                    align="center"
                    className={clsx(index === currentData.length - 1 && 'border-none')}
                  >
                    <EditButton onClick={() => {
                      dispatch(setSelectedCustomer(index + 1))
                    }}>
                      Edit
                    </EditButton>
                  </BodyTableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="flex justify-end mt-12">
          <Pagination
            count={Math.ceil(customersdata.length / itemsPerPage)}
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

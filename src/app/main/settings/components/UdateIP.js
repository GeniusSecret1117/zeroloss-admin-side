import React from 'react';
import Typography from '@mui/material/Typography';
import { SettingsIPTextField } from '@fuse/core/Common/AuthTextField';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

const UpdateIP = (props) => {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: '198.51.100.10' },
    { key: 1, label: '203.0.113.5' },
    { key: 2, label: '203.0.113.5' },
    { key: 3, label: '203.0.113.5' },
    { key: 4, label: '203.0.113.5' },
    { key: 5, label: '203.0.113.5' },
    { key: 6, label: '203.0.113.5' },
    { key: 7, label: '203.0.113.5' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  return (
    <div className="flex mt-[20px] gap-16 items-start">
      <img className="" src="assets/icons/whitelist.svg" alt="whitelist" />
      <div className="w-full">
        <Typography className="font-semibold text-[24px]">ZEROLOSS - IP Address</Typography>
        <div className="mt-16">
          <Typography className="text-[16px] font-medium text-[#031E0DCC]">Add New IP</Typography>
          <div className="flex flex-col sm:flex-row items-center gap-16">
            <SettingsIPTextField className="w-full" defaultValue="198.51.100.10, 203.0.113.5" />
            <Button
              variant="contained"
              color="secondary"
              className="min-w-[200px] font-medium text-[16px]"
              aria-label="Update"
              sx={{ height: '50px', minHeight: '50px' }}
            >
              Update IP Address
            </Button>
          </div>
        </div>
        <Typography className="text-[14px] text-[#FF143E] font-medium mt-8">
          Note : Multiple IP addresses&nbsp;
          <span className="text-[#FF4E6E] font-normal">must be entered in </span>&nbsp;a
          comma-separated &nbsp;<span className="text-[#FF4E6E] font-normal">format.</span>
        </Typography>
        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
          }}
          component="ul"
          className="w-full border border-[#C3D3CB] rounded-[16px] p-8 mt-16 flex flex-wrap justify-start gap-8 shadow-none"
        >
          {chipData.map((data) => (
            <ListItem key={data.key}
              sx={{
                width: 'auto', // Disable full width
                padding: '0', // Remove left padding
              }}>
              <Chip variant="outlined" label={data.label} onDelete={handleDelete(data)} />
            </ListItem>
          ))}
        </Paper>
      </div>
    </div>
  );
};

export default UpdateIP;

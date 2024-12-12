import React from 'react';
import Typography from '@mui/material/Typography';
import { formatNumberWithDecimal } from '@fuse/utils';
import { SettingsEmailTextField } from '@fuse/core/Common/AuthTextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';

const UpdateEmail = (props) => {

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'john.doe@example.com' },
    { key: 1, label: 'john.doe@example.com' },
    { key: 2, label: 'john.doe@example.com' },
    { key: 3, label: 'john.doe@example.com' },
    { key: 4, label: 'john.doe@example.com' },
    { key: 5, label: 'john.doe@example.com' },
    { key: 6, label: 'john.doe@example.com' },
    { key: 7, label: 'john.doe@example.com' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <div className="col-span-1 border border-[#DCE0DD] rounded-[12px]">
      <div className="w-full h-[50px] bg-[#D7ECE2] rounded-t-[12px] justify-center items-center flex">
        <Typography className="font-semibold text-[20px]">Administrator Email Notification</Typography>
      </div>
      <div className="p-8">
        <div className="mt-16">
          <Typography className="text-[16px] font-medium text-[#031E0DCC]">Email Address</Typography>
          <SettingsEmailTextField className="w-full" defaultValue="john.doe@example.com, john.doe@example.com," />
        </div>
        <Typography className="text-[14px] text-[#FF143E] font-medium mt-8">
          Note : Multiple emails addresses&nbsp;
          <span className="text-[#FF4E6E] font-normal">must be entered in </span>&nbsp;a
          comma-separated &nbsp;<span className="text-[#FF4E6E] font-normal">format.</span>
        </Typography>
        <div className="flex justify-end my-32">
          <Button
            variant="contained"
            color="secondary"
            className="font-medium text-[16px]"
            aria-label="Update"
          >
            Update Emails
          </Button>
        </div>
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

export default UpdateEmail;

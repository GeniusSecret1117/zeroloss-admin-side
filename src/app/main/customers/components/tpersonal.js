import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const ShareIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#AEB4B7',
  width: '24px',
  height: '24px',
}));

const TPersonal = (props) => {
  return (
    <div className="col-span-1 p-12 sm:p-24 rounded-[16px] bg-[#E4E6E7] border border-[#DCE0DD] flex flex-col items-center">
      <div className="rounded-[16px] border border-[#AEB4B7] flex items-center justify-center w-[100px] h-[100px]">
        <PersonIcon sx={{ fontSize: 100, color: '#AEB4B7' }} />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
        <ShareIconButton />
        <ShareIconButton />
        <ShareIconButton />
        <ShareIconButton />
        <ShareIconButton />
        <ShareIconButton />
      </div>
      <div className="mt-[18px] px-8 md:px-36 w-full">
        <div className="flex justify-between items-center my-8 gap-16">
          <Typography className="text-[#AEB4B7] font-medium text-[14px] w-[150px]">Name</Typography>
          <div className="h-[18px] rounded-[8px] bg-[#AEB4B7] w-full" />
        </div>
        <div className="flex justify-between items-center my-8 gap-16">
          <Typography className="text-[#AEB4B7] font-medium text-[14px] w-[150px]">Email ID</Typography>
          <div className="h-[18px] rounded-[8px] bg-[#AEB4B7] w-full" />
        </div>
        <div className="flex justify-between items-center my-8 gap-16">
          <Typography className="text-[#AEB4B7] font-medium text-[14px] w-[150px]">Phone Number</Typography>
          <div className="h-[18px] rounded-[8px] bg-[#AEB4B7] w-full" />
        </div>
        <div className="flex justify-between items-center my-8 gap-16">
          <Typography className="text-[#AEB4B7] font-medium text-[14px] w-[150px]">Referral Link </Typography>
          <div className="h-[18px] rounded-[8px] bg-[#AEB4B7] w-full" />
        </div>
        <Divider sx={{ width: '100%', borderColor: '#AEB4B7' }} className="my-16" />
        <div className="flex justify-between items-center my-8 gap-16">
          <Typography className="text-[#AEB4B7] font-medium text-[14px] w-[150px]">Referral by</Typography>
          <div className="w-full flex flex-col gap-8">
            <div className="h-[18px] rounded-[8px] bg-[#AEB4B7] w-full" />
            <div className="h-[18px] rounded-[8px] bg-[#AEB4B7] w-full" />
            <div className="h-[18px] rounded-[8px] bg-[#AEB4B7] w-full" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default TPersonal;

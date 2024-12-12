import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { FaWhatsapp } from 'react-icons/fa';
import { PiTelegramLogo } from 'react-icons/pi';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { RiTwitterXLine } from 'react-icons/ri';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';

const ShareIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#BFDACD',
  width: '24px',
  height: '24px',
  '&:hover': {
    backgroundColor: '#BFDACD99',
  },
  padding: '5px',
}));

const Personal = (props) => {
  return (
    <div className="col-span-1 p-12 sm:p-24 rounded-[16px] bg-[#F3F9F7] border border-[#DCE0DD] flex flex-col items-center">
      <div className="rounded-[16px] flex items-center justify-center w-[100px] h-[100px] overflow-hidden">
        <img
          src="assets/images/avatars/male-01.jpg"
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
        <ShareIconButton className="ml-6">
          <FaWhatsapp className="text-[20px] text-[#032123]" />
        </ShareIconButton>
        <ShareIconButton className="ml-6">
          <PiTelegramLogo className="text-[20px] text-[#032123]" />
        </ShareIconButton>
        <ShareIconButton className="ml-6">
          <FaFacebookF className="text-[16px] text-[#032123]" />
        </ShareIconButton>
        <ShareIconButton className="ml-6">
          <AiFillInstagram className="text-[20px] text-[#032123]" />
        </ShareIconButton>
        <ShareIconButton className="ml-6">
          <FaLinkedin className="text-[24px] text-[#032123]" />
        </ShareIconButton>
        <ShareIconButton className="ml-6">
          <RiTwitterXLine className="text-[24px] text-[#032123]" />
        </ShareIconButton>
      </div>
      <div className="mt-[18px] px-8 md:px-36 w-full">
        <div className="flex justify-between items-center my-4 gap-16">
          <Typography className="font-medium text-[14px] w-[150px]">Name</Typography>
          <Typography className="w-full text-[20px] font-bold">Glenda J. Boulay</Typography>
        </div>
        <div className="flex justify-between items-center my-4 gap-16">
          <Typography className="font-medium text-[14px] w-[150px]">Email ID</Typography>
          <Typography className="w-full text-[16px] font-normal">davidzaho781@gmail.com</Typography>
        </div>
        <div className="flex justify-between items-center my-4 gap-16">
          <Typography className="font-medium text-[14px] w-[150px]">Phone Number</Typography>
          <Typography className="w-full text-[16px] font-normal">(123) 456-7890</Typography>
        </div>
        <div className="flex justify-between items-center my-4 gap-16">
          <Typography className="font-medium text-[14px] w-[150px]">Referral Link </Typography>
          <div className="w-full">
            <Paper className="flex items-center col-span-6 px-8 py-4 border border-[#DCE0DD] h-[42px] rounded-[6px] bg-[#EEEFEF] shadow-none">
              <Input
                className="flex flex-1 px-8"
                disableUnderline
                fullWidth
                defaultValue="https://www.zeroloss.com/referral/1234567890"
                readOnly
              />
              <IconButton color="primary">
                <ContentCopyOutlinedIcon className="text-[14px]" />
              </IconButton>
            </Paper>
          </div>
        </div>
        <Divider sx={{ width: '100%', borderColor: '#75757540' }} className="my-16" />
        <div className="flex justify-between items-center my-4 gap-16">
          <Typography className="font-medium text-[14px] w-[150px]">Referral by</Typography>
          <div className="w-full flex flex-col gap-4">
            <Typography className="w-full text-[16px] font-normal">David Zaho</Typography>
            <Typography className="w-full text-[16px] font-normal">davidzaho781@gmail.com</Typography>
            <Typography className="w-full text-[16px] font-normal">(123) 456-7890</Typography>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Personal;

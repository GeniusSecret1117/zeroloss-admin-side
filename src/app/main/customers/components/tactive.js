import Typography from '@mui/material/Typography';

const TActive = (props) => {
  return (
    <div className="col-span-1">
      <div className="rounded-[16px] bg-[#E4E6E7] p-10 grid grid-cols-1 sm:grid-cols-2 border border-[#DCE0DD99] gap-20">
        <div className="h-[12px] rounded-[8px] bg-[#AEB4B7] w-full col-span-1" />
        <div className="h-[12px] rounded-[8px] bg-[#AEB4B7] w-full col-span-1" />
      </div>
      <div className="rounded-[16px] bg-[#E4E6E7] p-16 grid grid-cols-1 md:grid-cols-2 border border-[#DCE0DD99] gap-16 mt-12">
        <div className="col-span-1 flex flex-col justify-center">
          <Typography className="text-[#AEB4B7] font-normal text-[14px]">
            Capital Amount{' '}
          </Typography>
          <div className="bg-[#AEB4B7] rounded-[8px] w-full h-[34px] grid grid-cols-4 gap-8 p-8 items-center">
            <div className="bg-[#E4E6E7] rounded-[8px] h-[8px] col-span-1" />
            <div className="bg-[#E4E6E7] rounded-[8px] h-[8px] col-span-1" />
            <div className="bg-[#E4E6E7] rounded-[8px] h-[8px] col-span-1" />
            <div className="bg-[#E4E6E7] rounded-[8px] h-[8px] col-span-1" />
          </div>
        </div>
        <div className="col-span-1 bg-[#AEB4B7] border border-[#AEB4B7] rounded-[12px]">
          <div className="w-full h-[40px] bg-[#E4E6E7] rounded-t-[12px]" />
          <div className="flex flex-col gap-8 p-16 mb-16">
            <div className="flex flex-col items-center justify-center">
              <Typography className="text-[#E4E6E7] font-normal text-[14px]">Customer %</Typography>
              <div className="bg-[#E4E6E7] rounded-[6px] h-[40px] my-4 w-full" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Typography className="text-[#E4E6E7] font-normal text-[14px]">Zeroloss %</Typography>
              <div className="bg-[#E4E6E7] rounded-[6px] h-[40px] my-4 w-full" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Typography className="text-[#E4E6E7] font-normal text-[14px]">Referral %</Typography>
              <div className="bg-[#E4E6E7] rounded-[6px] h-[40px] my-4 w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[8px] bg-[#AEB4B7] h-[44px] flex items-center justify-center mt-16">
        <Typography className="text-[#E4E6E7] font-medium text-[16px]">Update</Typography>
      </div>
    </div>
  );
};

export default TActive;

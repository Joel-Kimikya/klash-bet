import React from "react";
import { RiArrowRightSLine } from "@react-icons/all-files/ri/RiArrowRightSLine";

const Promotion = () => {
  return (
    <div className='w-full h-12 bg-gradient-to-r from-sky-400 via-primary to-sky-400 text-center pt-1 flex flex-row justify-evenly'>
      <div className='text-start'>
        <p className='text-sm italic text-white/70 text-[13px] font-bold'>
          Get $50
        </p>
        <p className='text-[11px] font-bold italic'>on the balance sheet now</p>
      </div>
      <button>
        <RiArrowRightSLine />
      </button>
    </div>
  );
};

export default Promotion;

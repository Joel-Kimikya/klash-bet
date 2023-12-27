import React from "react";
import TopCenterSVG from "../vectors/TopCenterSVG";
import Link from "next/link";

const Logo = () => {
  return (
    <div className='flex items-center justify-center'>
      <TopCenterSVG />
      <div className='absolute top-auto bottom-auto'>
        <div className='w-auto h-full text-white flex items-center justify-center font-extrabold md:text-3xl text-4xl z-30 relative'>
          <Link href='#'>
            KLASH<span className='text-blue-light'>-BET</span>
          </Link>
          <div className='absolute text-6xl text-blue-light -z-30 text-opacity-20 pt-2'>
            <p className='glow opacity-50 selection:bg-none'>KB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;

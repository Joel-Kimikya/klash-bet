import React from "react";
import Input from "../components/widgets/Input";
import Link from "next/link";

const page = () => {
  return (
    <div className='w-full h-screen flex flex-col lg:items-center lg:justify-center py-9 px-11'>
      <div className='text-start space-y-5 border border-black/20 shadow-lg rounded-lg pt-7 pb-16 px-5'>
        <div className='lg:text-2xl text-lg font-extrabold '>
          <Link href='/' className='text-black/90'>
            KLASH<span className='text-blue-light'>-BET</span>
          </Link>
        </div>
        <p className='lg:text-sm text-xs text-black/40'>
          Below enter your New Password and Confirm
        </p>
        <form action='#' className='space-y-6'>
          <Input
            title='Password'
            type='password'
            placeholder='Password'
            required={true}
          />

          <Input
            title='Confirm Password'
            type='password'
            placeholder='Confirm Password'
            required={true}
          />
          <div className='w-full flex items-center justify-center'>
            <button
              type='submit'
              className='lg:text-sm w-full text-xs py-4 bg-primary rounded-lg font-semibold text-white hover:bg-primary/95 transition ease-out duration-300'>
              Update Password
            </button>
          </div>
          <div className='w-full flex items-center justify-center'>
            <Link
              href='/login'
              className='lg:text-sm w-full text-xs py-4 bg-white border text-center border-black rounded-lg font-semibold text-black/80 hover:bg-gray-100 transition ease-out duration-300'>
              Go back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;

/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import Input from "../components/widgets/Input";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className='flex flex-row'>
      <div className='w-full h-screen flex flex-col lg:items-center lg:justify-center px-7 py-6'>
        <div className='text-start border border-black/20 shadow-lg rounded-lg pt-9 pb-16 px-4 lg:pt-6 lg:pb-11 '>
          <div className='lg:text-3xl text-xl font-extrabold'>
            <Link href='/' className='text-black/90'>
              KLASH<span className='text-blue-light'>-BET</span>
            </Link>
          </div>
          <div className='lg:space-y-2 space-y-0 py-3 lg:py-7 text-black/80 pt-9 md:pt-5 lg:pt-9'>
            <div className='lg:text-3xl text-xl font-extrabold'>
              Create an account
            </div>
            <div className='lg:text-sm text-xs text-black/70'>
              {`Let's get started with your 30 day free trial.`}
            </div>
          </div>

          <div className=''>
            <form action='#'>
              <div className='space-y-1 lg:space-y-2'>
                <Input
                  title='Name'
                  type='text'
                  placeholder='Enter Your Name'
                  required={true}
                />
                <Input
                  title='Email'
                  type='email'
                  placeholder='Enter Your Email'
                  required={true}
                />
                <Input
                  title='Password'
                  type='password'
                  placeholder='Enter Your Password'
                  required={true}
                />
                <Input
                  title='Confirm Password'
                  type='password'
                  placeholder='Confirm Your Password'
                  required={true}
                />

                <div className='w-full pt-10 flex items-center justify-center'>
                  <button
                    type='submit'
                    className='lg:text-sm w-full text-xs py-4 bg-primary rounded-lg font-semibold text-white hover:bg-primary/95 transition ease-out duration-300'>
                    Create Account
                  </button>
                </div>
              </div>
            </form>
          </div>

          <button
            type='submit'
            className='w-full border border-black/30 flex items-center justify-center rounded-lg hover:text-black/70 transition ease-out duration-300 text-black/90 font-bold mt-2 text-sm gap-2'>
            <FcGoogle className='text-lg lg:text-xl' />
            <p className='text-xs lg:text-sm py-4'>Sign up with Google</p>
          </button>
          <div className='flex justify-center mt-9'>
            <div className='text-xs lg:text-sm text-black/70 space-x-2'>
              <span>Already have an account?</span>
              <Link
                href='/login'
                className='text-black text-xs lg:text-sm underline cursor-pointer'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

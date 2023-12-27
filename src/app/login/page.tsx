/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import Link from "next/link";
import Input from "../components/widgets/Input";

const SignUp = () => {
  return (
    <div className='flex flex-row'>
      <div className='w-full h-screen flex flex-col lg:items-center lg:justify-center px-7 py-6'>
        <div className='text-start border border-black/20 shadow-lg rounded-lg pt-9 pb-9 px-4 lg:pt-12 lg:pb-14'>
          <div className='lg:text-3xl text-xl font-extrabold'>
            <Link href='/' className='text-black/90'>
              KLASH<span className='text-blue-light'>-BET</span>
            </Link>
          </div>
          <div className='space-y-2 py-7 text-black/80'>
            <div className='text-xl lg:text-3xl font-extrabold'>
              Welcome back!
            </div>
            <div className='text-xs lg:text-sm text-black/50'>
              {`Welcome back! Please enter your details.`}
            </div>
          </div>

          <button
            type='submit'
            className='w-full border border-black/30 flex items-center justify-center rounded-lg hover:text-black/70 transition ease-out duration-300 text-black/90 font-bold mt-2 text-sm gap-2'>
            <FcGoogle className='text-lg lg:text-xl' />
            <p className='text-xs lg:text-sm py-4'>Log in with Google</p>
          </button>
          <div className='flex flex-row justify-center items-center space-x-2 pt-3 lg:pt-0'>
            <div className='w-40 h-[1px] bg-black/10'></div>
            <p className='text-black/50 lg:text-sm text-xs'>or</p>
            <div className='w-40 h-[1px] bg-black/10'></div>
          </div>

          <div>
            <form action='#'>
              <div className='space-y-4 lg:space-y-5'>
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
                <div className='text-xs text-black/60 flex flex-row justify-between pb-2'>
                  <div className='space-x-1 flex items-center'>
                    <input type='checkbox' value='RemeberMe'></input>
                    <label
                      htmlFor='rememberMe'
                      className='text-[11px] lg:text-sm'>
                      Remember me
                    </label>
                  </div>
                  <div className='underline cursor-pointer hover:text-black text-[11px] lg:text-sm'>
                    <Link href='/resetPassword'>Forget password?</Link>
                  </div>
                </div>

                <div className='w-full flex items-center justify-center'>
                  <button
                    type='submit'
                    className='lg:text-sm w-full text-xs py-4 bg-primary rounded-lg font-semibold text-white hover:bg-primary/95 transition ease-out duration-300'>
                    Log In
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className='flex justify-center py-10'>
            <div className='text-xs space-x-2 lg:text-sm text-black/40'>
              <span>{`Don't have an account?`}</span>
              <Link
                href='/signup'
                className='text-black text-xs lg:text-sm underline cursor-pointer'>
                Sign up for free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

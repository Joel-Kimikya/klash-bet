"use client";
import React from "react";
import SideBar from "./SideBar";
import HomeMenu from "./HomeMenu";
import Footer from "../footer/Footer";
import Notification from "./Notification";
import Button from "../widgets/Button";
import { CgMouse } from "@react-icons/all-files/cg/CgMouse";
import TournamentCard from "../cards/TournamentCard";
import SectionTopEdge from "../vectors/SectionTopEdge";
import { MyTournaments } from "../data/dummy";
import Games from "./Games";

const HomeSection = () => {
  return (
    <div className='flex w-full h-full pt-9'>
      <SideBar />
      <div className='md:min-w-[80%] min-w-screen h-full flex flex-col text-base'>
        <div className='flex flex-col bg-black-light space-y-4 px-4 pt-4 pb-4 rounded-tl-xl bg-[radial-gradient(ellipse_at_left,var(--tw-gradient-stops))] from-blue-light/30 via-black-light to-black-light'>
          <HomeMenu />
          <div className='flex flex-col space-y-5 w-full h-full text-base'>
            <div className='flex flex-row justify-around items-center h-96 gap-36'>
              <div className='w-auto h-auto space-y-7'>
                <div className='text-4xl font-bold space-y-3'>
                  <div>DAILY</div>
                  <div className='text-blue-light'>TOURNAMENTS</div>
                </div>
                <div className='text-sm font-light space-y-1'>
                  <div>Participate in numerous tournaments</div>
                  <div>and compete against other players</div>
                  <div>for a hefty prize pool</div>
                </div>
                <div className='w-48 h-auto flex items-center space-x-1 bg-blue-light/100 rounded-lg p-4 text-sm font-semibold hover:bg-sky-400 transition ease-out duration-300'>
                  <span>
                    <CgMouse className='text-lg' />
                  </span>
                  <Button>Go to tournaments</Button>
                </div>
              </div>
              <div className='w-auto h-auto text-8xl font-[1000] glow md:block hidden'>
                <p>Klash Bet</p>
              </div>
            </div>
            <Tournament />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full h-full'>
              <Games />
              <Games />
              <Games />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Notification />
    </div>
  );
};

export default HomeSection;

const Tournament = () => {
  return (
    <div className='bg-primary/70 rounded-md'>
      <div className='w-auto relative h-12 flex items-center font-extrabold'>
        <div className='absolute flex justify-start items-center'>
          <SectionTopEdge />
          <div className='absolute text-xs font-[1000] px-5 flex items-center space-x-2'>
            <div className='w-3 h-3 bg-green-500 shadow-[inset_1px_-2px_4px_rgba(0,0,0,0.9)] rounded-full'></div>
            <p>TOURNAMENTS</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 p-5'>
        {MyTournaments?.map(
          (
            {
              amount,
              date,
              members,
              prizes,
              sub_title,
              title,
              users,
              properties,
              status,
            },
            key
          ) => (
            <TournamentCard
              key={key}
              date={date}
              title={title}
              users={users}
              amount={amount}
              prizes={prizes}
              status={status}
              members={members}
              sub_title={sub_title}
              properties={properties}
            />
          )
        )}
      </div>
    </div>
  );
};

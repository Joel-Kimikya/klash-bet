import React from "react";
import TopEdge from "../vectors/TopEdge";
import { ITournament } from "../data/interfaces";
import { GiChampions } from "@react-icons/all-files/gi/GiChampions";
import { FaUserFriends } from "@react-icons/all-files/fa/FaUserFriends";
import { BsLightningFill } from "@react-icons/all-files/bs/BsLightningFill";

const TournamentCard = ({
  title,
  users,
  amount,
  prizes,
  status,
  members,
  sub_title,
  date: { day, hour, minute },
  properties: { bg_gradient, bg_color, color },
}: ITournament) => {
  return (
    <div
      className={`w-full h-auto rounded-md bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] via-notification-color to-notification-color cursor-pointer ${bg_gradient}`}>
      <div className='w-full h-auto flex flex-row items-start justify-between -space-x-5'>
        <div className='w-full h-full relative'>
          <TopEdge fill={bg_color} />
          <div className='absolute text-black top-0 px-3 w-full h-full flex flex-row justify-start items-center space-x-1'>
            <p
              className={`text-xs font-[1000] uppercase ${
                status === "live"
                  ? "text-red-light"
                  : status === "closed"
                  ? "text-gray-900"
                  : "text-white"
              }`}>
              {status}
            </p>
          </div>
        </div>
        <div className='text-xs p-3'>
          <div className='flex flex-row space-x-1 text-xs font-bold'>
            <div className='flex flex-col items-center'>
              {String(day).padStart(2, "0")}
              <p className='text-[10px] text-gray-400'>DAY</p>
            </div>
            <p className='text-gray-400'>:</p>
            <div className='flex flex-col items-center'>
              {String(hour).padStart(2, "0")}
              <p className='text-[10px] text-gray-400'>HOUR</p>
            </div>
            <p className='text-gray-400'>:</p>
            <div className='flex flex-col items-center'>
              {String(minute).padStart(2, "0")}
              <p className='text-[10px] text-gray-400'>MIN</p>
            </div>
            {/* <p className="text-gray-400">:</p>
            <div className="flex flex-col items-center">
              {String(seconds).padStart(2, "0")}
              <p className="text-[10px]  text-gray-400">SEC</p>
            </div> */}
          </div>
        </div>
      </div>
      <div className='w-full h-auto py-10 flex flex-col items-center justify-center space-y-2'>
        <div className='font-[1000]'>{title}</div>
        <div className={`text-4xl font-[1000] ${color}`}>
          $ {amount.toLocaleString()}
        </div>
        <div className={`text-base font-[1000]`}>{sub_title}</div>
      </div>
      <div className='flex flex-col space-y-2 px-4'>
        <div className='w-full h-full py-3 text-2xl flex flex-col justify-center rounded-md bg-primary/50'>
          <p className='text-gray-200 font-[1000] text-center'>$ {100}</p>
          <p className='text-xs font-bold text-center text-gray-100'>
            Price Per Ticket
          </p>
        </div>
        <div className='flex flex-row justify-center text-lg space-x-1'>
          <div className='w-1/2 h-full py-4 bg-primary/50 flex flex-col justify-center rounded-l-md'>
            <div className='flex justify-center items-center gap-x-2'>
              <FaUserFriends className='text-xl' />
              <span className='text-gray-200 font-bold'>{members}</span>
            </div>
            <p className='text-[10px] leading-4 text-center text-gray-400'>
              Members
            </p>
          </div>
          <div className='w-1/2 h-full py-4 bg-primary/50 flex flex-col justify-center rounded-r-md'>
            <div className='flex justify-center items-center gap-x-2'>
              <GiChampions className='text-xl' />
              <span className='text-gray-200 font-bold'>{prizes}</span>
            </div>
            <p className='text-[10px] leading-4 text-center text-gray-400'>
              Prize Places
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col py-6 px-3 space-y-3'>
        {users?.map(({ amount, color, name }, key) => (
          <div key={key} className='flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center space-x-2'>
              <div className={`w-9 h-9 rounded-xl ${color}`} />
              <p className='text-xs text-gray-400 font-bold'>{name}</p>
            </div>
            <div className='flex flex-row space-x-1 text-yellow-light'>
              <p className='text-xs'>$ {amount}</p>
              <span>
                <BsLightningFill className='text-xs' />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentCard;

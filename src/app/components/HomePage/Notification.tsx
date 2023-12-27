import React from "react";
import Promotion from "./Promotion";
import { IoIosArrowDropleft } from "@react-icons/all-files/io/IoIosArrowDropleft";
import Button from "../widgets/Button";
import BetArea from "./BetArea";

const Notification = () => {
  const messages = [
    {
      title: "Icognito",
      action: 1,
      description:
        "Tempora quis odit perferendis. Ipsa vel beatae fuga consectetur ea?",
      time: "10:55",
    },
    {
      title: "STILL3D",
      action: 2,
      description:
        "Quos eum aliquam harum. Sequi velit qui cum voluptas! Tempora quis odit perferendis. Ipsa vel beatae fuga consectetur ea?",
      time: "06:23",
    },
    {
      title: "Paul",
      action: 3,
      description:
        "Tempora quis odit perferendis. Ipsa vel beatae fuga consectetur ea?",
      time: "19:09",
    },
    {
      title: "Icognito",
      action: 4,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quis accusantium quos eum aliquam harum. Sequi velit qui cum voluptas! Tempora quis odit perferendis. Ipsa vel beatae fuga consectetur ea?",
      time: "00:41",
    },
    {
      title: "Jack",
      action: 5,
      description:
        "Exercitationem quis accusantium quos eum aliquam harum. Sequi velit qui cum voluptas! Tempora quis odit perferendis. Ipsa vel beatae fuga consectetur ea?",
      time: "17:21",
    },
    {
      title: "Unknown",
      action: 6,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quis accusantium quos eum aliquam harum. Sequi velit qui cum voluptas! Tempora quis odit perferendis. Ipsa vel beatae fuga consectetur ea?",
      time: "04:49",
    },
  ];

  return (
    <div className='w-80 lg:block hidden'>
      <Promotion />
      <BetArea />

      <div className='flex flex-row justify-between py-3 pr-2 border-t-2 border-black-light'>
        <button className='flex flex-row text-xl items-center space-x-2 text-gray-600 bg-primary rounded-full'>
          <IoIosArrowDropleft />
          <span className='text-xs text-white font-bold'>Chat</span>
        </button>
        <Button className='text-[10px] text-gray-500 hover:underline'>
          Rules
        </Button>
      </div>
      <div className='flex flex-col space-y-2 pt-4 px-2'>
        {messages?.map((sms, key) => {
          const { action, description, time, title } = sms;
          return (
            <div key={key} className='space-y-1'>
              <div className='w-auto h-auto bg-notification-color rounded-t-2xl rounded-br-2xl rounded-bl-xs'>
                <div className='flex flex-col p-2 space-y-2'>
                  <div className='flex flex-row space-x-2 items-center'>
                    <div
                      className={`w-4 h-4 rounded-full ${
                        action === 1
                          ? "bg-red-400"
                          : action === 2
                          ? "bg-yellow-400"
                          : action === 3
                          ? "bg-green-400"
                          : action === 4
                          ? "bg-red-800"
                          : action === 5
                          ? "bg-white"
                          : "bg-purple-600"
                      }`}
                    />
                    <p className='text-sm'>{title}</p>
                  </div>
                  <p className='text-xs font-light text-gray-400'>
                    {description}
                  </p>
                </div>
              </div>
              <p className='text-xs text-gray-500'>{time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notification;

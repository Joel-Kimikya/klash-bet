"use client";
import React, { useState } from "react";
import { RiCopperCoinFill } from "@react-icons/all-files/ri/RiCopperCoinFill";
import { GiQueenCrown } from "@react-icons/all-files/gi/GiQueenCrown";
import { GiPokerHand } from "@react-icons/all-files/gi/GiPokerHand";
import { GiPerspectiveDiceSixFacesSix } from "@react-icons/all-files/gi/GiPerspectiveDiceSixFacesSix";
import { BiMeteor } from "@react-icons/all-files/bi/BiMeteor";
import { IoIosRocket } from "@react-icons/all-files/io/IoIosRocket";
import { CgToolbox } from "@react-icons/all-files/cg/CgToolbox";
import { GiDynamite } from "@react-icons/all-files/gi/GiDynamite";
import { GiLadder } from "@react-icons/all-files/gi/GiLadder";
import { FaCompactDisc } from "@react-icons/all-files/fa/FaCompactDisc";
import { SiMeteor } from "@react-icons/all-files/si/SiMeteor";
import { GiCherry } from "@react-icons/all-files/gi/GiCherry";
import { AiOutlineBook } from "@react-icons/all-files/ai/AiOutlineBook";
import Button from "../widgets/Button";

const SideBar = () => {
  const [selected, setSelected] = useState(0);

  const menuArray = [
    {
      title: "Menu 1",
      icon: <IoIosRocket />,
      caption: "Top",
    },
    {
      title: "Menu 2",
      icon: <RiCopperCoinFill />,
      caption: "Soccer",
    },
    {
      title: "Menu 3",
      icon: <CgToolbox />,
      caption: "Hockey",
    },
    {
      title: "Menu 4",
      icon: <GiQueenCrown />,
      caption: "Basketball",
    },
    {
      title: "Menu 5",
      icon: <GiPerspectiveDiceSixFacesSix />,
      caption: "Tennis",
    },
    {
      title: "Menu 6",
      icon: <AiOutlineBook />,
      caption: "Rugby",
    },
    {
      title: "Menu 7",
      icon: <GiPokerHand />,
      caption: "Volleyball",
    },
    {
      title: "Menu 8",
      icon: <GiDynamite />,
      caption: "MMA",
    },
    {
      title: "Menu 9",
      icon: <GiLadder />,
      caption: "Cricket",
    },
    {
      title: "Menu 10",
      icon: <FaCompactDisc />,
      caption: "Racing",
    },
    {
      title: "Menu 11",
      icon: <BiMeteor />,
      caption: "Chess",
    },
    {
      title: "Menu 12",
      icon: <SiMeteor />,
      caption: "Chess",
    },
    {
      title: "Menu 13",
      icon: <GiCherry />,
      caption: "Athletics",
    },
  ];

  return (
    <div className='flex flex-col items-center justify-start lg:w-20 md:w-16 w-24 space-y-2 px-4 md:pt-3 pt-9'>
      {menuArray.map((menu, index) => (
        <Button
          key={index}
          className={ `lg:w-[4.4rem] md:w-[3.7rem] w-[5.3rem] h-auto p-2 lg:text-2xl md:text-xl ${
            selected === index
              ? "flex items-center justify-center text-yellow-light bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary via-primary to-sky-500 rounded-lg"
              : "flex text-gray-600 items-center justify-center hover:text-sky-800 transition ease-out duration-500"
          }`}
          onClick={() => setSelected(index)}>
          <div className='flex flex-col items-center justify-center lg:space-y-1 md:space-y-0'>
            <div className="md:text-2xl text-3xl">{ menu.icon }</div>
            <div className='lg:text-xs md:text-[11px]'>{ menu.caption }</div>
          </div>
        </Button>
      ))}
    </div>
  );
};
export default SideBar;

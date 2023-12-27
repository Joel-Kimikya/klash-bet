import React, { useState } from "react";
import Button from "../widgets/Button";
import { TiHome } from "@react-icons/all-files/ti/TiHome";
import { GiWallet } from "@react-icons/all-files/gi/GiWallet";
import { GiTrophyCup } from "@react-icons/all-files/gi/GiTrophyCup";
import { IoIosRibbon } from "@react-icons/all-files/io/IoIosRibbon";
import { RiHandCoinFill } from "@react-icons/all-files/ri/RiHandCoinFill";
import { TiPointOfInterest } from "@react-icons/all-files/ti/TiPointOfInterest";
import { HiCurrencyDollar } from "react-icons/hi";
import { IoMdFootball } from "@react-icons/all-files/io/IoMdFootball";

const HomeMenu = () => {
  const [selected, setSelected] = useState(0);
  const Menus = [
    {
      title: "Home",
      icon: <TiHome className="text-xl -mt-2" />,
      badge: false,
    },
    {
      title: "Games",
      icon: <TiPointOfInterest className="text-xl -mt-1" />,
      badge: false,
    },
    {
      title: "Tournaments",
      icon: <GiTrophyCup className="text-xl -mt-1" />,
      badge: true,
    },
    {
      title: "Ranks",
      icon: <IoIosRibbon className="text-xl -mt-1" />,
      badge: false,
    },
    {
      title: "Bonuses",
      icon: <RiHandCoinFill className="text-xl -mt-1" />,
      badge: false,
    },
  ];

  return (
    <div className="md:block hidden">
      <div className="flex flex-row justify-between items-center w-full h-full rounded-tl-xl">
      <div className="w-full h-full flex flex-row items-center space-x-5 text-xs">
        {Menus?.map(({ icon, title, badge }, key) => {
          return (
            <div
              key={key}
              onClick={() => setSelected(key)}
              className={`flex flex-row justify-center items-center gap-x-1 hover:text-blue-light pb-2 cursor-pointer transition ease-out duration-300 ${
                selected === key
                  ? "text-blue-light border-b-2 border-blue-light"
                  : key === Menus?.length - 1
                  ? "text-yellow-light hover:text-yellow-600 italic"
                  : "text-white"
              }`}
            >
              {icon}
              {title}
              {badge ? (
                <div
                  className={`text-black w-5 h-4 flex justify-center items-center rounded-full ${
                    selected === key ? "bg-blue-light" : "bg-white"
                  }`}
                >
                  5
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <InfoCard />
    </div>
    </div>
  );
};

export default HomeMenu;

const InfoCard = () => {
  const [selected, setSelected] = useState("refill");
  return (
    <div className="w-full h-full flex flex-row justify-end items-center space-x-4">
      <div className="space-y-1 flex flex-col">
        <div className="flex flex-row items-center justify-end gap-1">
          <HiCurrencyDollar className="text-2xl text-blue-light" />
          <p className="font-bold">{(5336.97).toLocaleString()}</p>
        </div>
        <div className="flex flex-row space-x-2 text-xs">
          <Button
            onClick={() => setSelected("refill")}
            className={`flex items-center space-x-1 hover:underline transition ease-out duration-300 ${
              selected === "refill"
                ? "text-yellow-light"
                : "text-white hover:text-gray-400"
            }`}
          >
            <GiWallet className="text-lg" />
            <span>Refill</span>
          </Button>
          <span className="text-white/20">|</span>

          <Button
            onClick={() => setSelected("withdraw")}
            className={`hover:underline transition ease-out duration-300 cursor-pointer ${
              selected === "withdraw"
                ? "text-yellow-light"
                : "text-white hover:text-gray-400"
            }`}
          >
            Withdraw
          </Button>
        </div>
      </div>
      <div className="relative w-auto h-auto bg-white p-1 rounded-md cursor-pointer">
        <IoMdFootball className="text-4xl text-yellow-light hover:text-yellow-light/70" />
        <div className="w-7 h-7 absolute -top-3 -right-3 flex items-center justify-center rounded-full bg-blue-light">
          <p className="text-white font-[1000] text-sm">5</p>
        </div>
      </div>
    </div>
  );
};

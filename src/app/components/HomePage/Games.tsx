"use client";
import React from "react";
import { AiOutlineQuestionCircle } from "@react-icons/all-files/ai/AiOutlineQuestionCircle";
import Link from "next/link";
import { GiSpeaker } from "@react-icons/all-files/gi/GiSpeaker";
import { RiArrowRightSLine } from "@react-icons/all-files/ri/RiArrowRightSLine";
import Button from "../widgets/Button";
import SectionTopEdge from "../vectors/SectionTopEdge";

const Games = () => {
  return (
    <div className="w-full pb-2 h-full flex flex-col space-y-2 bg-black-card rounded-lg">
      <div className="w-full flex flex-row justify-between relative">
        <div className="w-auto relative h-12 flex items-center font-extrabold">
          <div className="absolute flex justify-start items-center">
            <div className="absolute text-xs font-[1000] px-5 flex items-center space-x-2">
              <p>MINERS</p>
            </div>
            <SectionTopEdge />
          </div>
        </div>
        <div className="w-32 h-auto flex flex-row justify-center items-center space-x-3 text-xl text-gray-400">
          <div className="w-8 h-9 bg-primary/40 rounded-lg flex items-center justify-center hover:text-blue-light transition ease-out duration-300">
            <Link href="/help">
              <AiOutlineQuestionCircle />
            </Link>
          </div>
          <div className="w-8 h-9 bg-primary/40 rounded-lg flex items-center justify-around hover:text-blue-light cursor-pointer transition ease-out duration-300">
            <span>
              <GiSpeaker />
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 w-full flex flex-row justify-between text-gray-500 text-sm">
        <table className="w-full h-full text-center text-xs border-separate border-spacing-y-2">
          <thead>
            <tr>
              <td className="text-left font-light w-[30%] pb-2">Player</td>
              <td className="font-light w-[14%] pb-2">Bet</td>
              <td className="font-light w-[14%] pb-2">Bomb</td>
              <td className="font-light w-[14%] pb-2">Coeff</td>
              <td className="font-light w-[14%] pb-2">Winning</td>
              <td className="text-right font-light w-[14%] pb-2"></td>
            </tr>
          </thead>
          <Miners />
        </table>
      </div>
    </div>
  );
};

export default Games;

const Miners = () => {
  const gamePoints = [
    {
      title: "StillD3ade",
      bet: "$ 50.5",
      bomb: "5",
      coeff: "x1",
      win: "$ 40.72",
    },
    {
      title: "Incognito",
      bet: "$ 15.92",
      bomb: "39",
      coeff: "x3.5",
      win: "$ 550.90",
    },
    {
      title: "Davis",
      bet: "$ 89.0",
      bomb: "8",
      coeff: "x2.2",
      win: "$ 550.90",
    },
    {
      title: "Eliz",
      bet: "$ 15.92",
      bomb: "39",
      coeff: "x3.5",
      win: "$ 550.90",
    },
    {
      title: "Paul",
      bet: "$ 1.2",
      bomb: "33",
      coeff: "x2.2",
      win: "$ 134.12",
    },
    {
      title: "Jean",
      bet: "$ 34.32",
      bomb: "23",
      coeff: "x2.3",
      win: "$ 234.23",
    },
    {
      title: "Jin",
      bet: "$ 34.32",
      bomb: "98",
      coeff: "x5",
      win: "$ 780.90",
    },
    {
      title: "Shaan",
      bet: "$ 11.11",
      bomb: "11",
      coeff: "x1.1",
      win: "$ 567.3",
    },
    {
      title: "Schwarz",
      bet: "$ 15.56",
      bomb: "32",
      coeff: "x6.6",
      win: "$ 250.20",
    },
    {
      title: "Max",
      bet: "$ 45.89",
      bomb: "23",
      coeff: "x6.5",
      win: "$ 53.50",
    },
    {
      title: "Jack",
      bet: "$ 89.34",
      bomb: "55",
      coeff: "x6.0",
      win: "$ 23.0",
    },
  ];
  return (
    <tbody className="text-white text-sm w-full h-full">
      {gamePoints.map((profile, key) => {
        const { title, bet, bomb, coeff, win } = profile;
        return (
          <tr
            key={key}
            className="p-1 text-xs cursor-pointer"
          >
            <td className="rounded-l-md bg-notification-color">
              <div className="flex flex-row items-center p-1 space-x-1">
                <div className="w-8 h-8 bg-gray-500 rounded-md" />
                <p className="text-gray-500 text-xs capitalize">{title}</p>
              </div>
            </td>
            <td className="bg-notification-color font-bold">{bet}</td>
            <td className="bg-notification-color">{bomb}</td>
            <td className="bg-notification-color font-bold">{coeff}</td>
            <td className="text-sky-400 bg-notification-color font-bold">
              {win}
            </td>
            <td className="w-full h-full flex justify-end items-center px-2 bg-notification-color rounded-r-md">
              <Button className="bg-primary/95 hover:bg-primary/70 text-lg flex items-center justify-center rounded-xl px-2 py-1">
                <RiArrowRightSLine />
              </Button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

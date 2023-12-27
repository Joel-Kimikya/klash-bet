import React from "react";
import { AiTwotoneSetting } from "@react-icons/all-files/ai/AiTwotoneSetting";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";

const BetArea = () => {
  return (
    <div className='w-auto h-auto my-3'>
      <div className='flex flex-row justify-between p-3'>
        <button className='text-xl text-gray-500'>
          <AiTwotoneSetting />
        </button>
        <button className='flex flex-row text-xl items-center space-x-1 text-gray-500'>
          <span className='text-xs text-white font-semibold'>SINGLE BET</span>
        </button>
        <button className='text-xl text-gray-500'>
          <MdDelete />
        </button>
      </div>
      <table className="w-full">
        <thead className="border border-gray-600">
          <tr>
            <td className="flex flex-row justify-around p-1">
              <p className="text-xs text-gray-400">Bet Amount</p>
              <p className="text-xs text-gray-400">Payout Up to</p>
            </td>
          </tr>
          <tr>
            <td className="flex flex-row justify-around p-1  border-t border-gray-600">
              <p className="text-xl font-bold text-sky-300">$ 50</p>
              <p className="text-xl font-bold">$ 450</p>
            </td>
          </tr>
        </thead>
        <tbody className="border border-gray-600">
          <tr>
            <td className="flex  flex-row justify-evenly pt-2"><span><input
              type='checkbox'
              value='RemeberMe'
              className='cursor-pointer'></input></span>
              <p className="text-xs text-gray-300 items-center flex">Barcelona - Real Madrid</p>
              <span><button className='w-5 text-gray-400 hover:text-gray-200'>
                <IoMdClose />
              </button></span>
            </td>
          </tr>
          <tr>
            <td className="flex flex-row justify-around text-gray-300 text-xs pb-2"><p>x2</p><p>Double Outcome</p></td>
          </tr>
        </tbody>
      </table>
        <div className='w-full h-8 bg-sky-500 hover:bg-sky-400 flex justify-center items-center text-sm font-semibold rounded-md'>
          <button>PLACE A BET</button>
        </div>
      </div>

  );
};

export default BetArea;

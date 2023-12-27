"use client";
import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { usePathname, useRouter } from "next/navigation";
import { FrFlag, UkFlag, TzFlag } from "../vectors/Flags";

type Props = { className?: string };
const LanguageSelector = ({ className }: Props): JSX.Element => {
  const router = useRouter();
  // const { locale, pathname } = router;

  const pathname = usePathname();
  const [selectedIndex, setSelectedIndex] = useState<number>(
    getDefaultKey("en")
  );

  const handleLanguage = (lan: string) => {
    router.push(pathname);
    // router.push(pathname, pathname, { locale: lan });
  };

  return (
    <div
      className={
        `w-full flex items-end space-x-1 text-2xl rounded-lg relative cursor-pointer ` +
        className
      }>
      {Languages[selectedIndex].flag}
      <select
        defaultValue={"en"}
        onChange={(e) => {
          handleLanguage(e.target.value);
          setSelectedIndex(e.target.selectedIndex);
        }}
        className={`w-full block bg-transparent appearance-none outline-none text-sm cursor-pointer hover:text-blue-light z-50 `}>
        {Languages.map(({ option, value }, index) => (
          <option key={index} value={value} className='text-xs'>
            {option}
          </option>
        ))}
      </select>

      <div className='absolute inset-y-0 -right-1 top-0 bottom-auto flex items-center text-gray-400 z-10 cursor-pointer'>
        <HiChevronDown className='text-lg' />
      </div>
    </div>
  );
};

export default LanguageSelector;

const getDefaultKey = (locale: string | undefined) => {
  return Languages.findIndex((val) => val.value === locale) || 0;
};

type ILanguages = {
  value: string;
  option: string;
  flag: JSX.Element;
};

const Languages: ILanguages[] = [
  {
    value: "fr",
    option: "FR",
    flag: <FrFlag />,
  },
  {
    value: "en",
    option: "EN",
    flag: <UkFlag />,
  },
  {
    value: "sw",
    option: "SW",
    flag: <TzFlag />,
  },
];

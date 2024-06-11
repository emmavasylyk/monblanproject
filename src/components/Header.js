"use client";

import React, { forwardRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DatePicker from "react-datepicker";
import Calendar from "../../public/icons/calendar.svg";
import Plus from "../../public/icons/plus.svg";

import "react-datepicker/dist/react-datepicker.css";

function Header() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date("2016/12/09"));

  const InputWithIcons = forwardRef(
    ({ value, onClick, onChange, clearValue }, ref) => (
      <div className="relative" onClick={onClick}>
        <input
          value={value}
          onClick={onClick}
          onChange={onChange}
          className="h-7 rounded border text-[13px] leading-[1.2] outline-[#DEDEDE] border-[#DEDEDE] text-[#636264] !pl-2 pr-[29px]"
          readOnly
          placeholder="from"
        />
        <button
          onClick={clearValue}
          className="absolute right-6 top-0 p-0.5 px-px bg-[#EBEBEB] cursor-pointer border-l border-l-[#DEDEDE]"
        >
          <Plus className="w-6 h-6 fill-[#5F5F5F]" />
        </button>
        <button className="absolute right-0 top-0 p-0.5 px-px bg-[#EBEBEB] cursor-pointer border-l border-l-[#DEDEDE]">
          <Calendar className=" w-6 h-6 fill-[#5F5F5F]" />
        </button>
      </div>
    )
  );

  return (
    <div className="flex gap-[86px] justify-center pt-[6px] pb-7 bg-white/[67%] shadow-grey">
      <Link href="/">
        <Image src={"/logo.svg"} alt="Logo" width={138} height={138} />
      </Link>
      <div className="pt-[27px]">
        <div className="mb-[15px] flex items-center gap-4">
          <h1 className="font-montserrat text-black font-medium -tracking-[0.24px] text-[24px] leading-[1.2]">
            monblanproject
          </h1>
          <p className="text-[#3D8EDA] text-[13px] -tracking-[0.39px] leading-[1.2] rounded-sm border border-[#3D8EDA] px-3 pt-[6px] pb-[7px]">
            Start on 17-02-2016
          </p>
        </div>
        <ul className="flex items-center mb-[19px]">
          <li className="text-[14px] leading-[1.15] mr-7">
            <span className="font-bold">870</span> posts
          </li>
          <li className="text-[14px] leading-[1.15] mr-[17px]">
            <span className="font-bold">11,787</span> followers
          </li>
          <li className="text-[14px] leading-[1.15]">
            <span className="font-bold">112</span> following
          </li>
        </ul>
        <div className="flex gap-[11px] items-center">
          <p className="text-base">Date</p>
          <div className="flex items-center w-[396px] justify-between">
            <div className="">
              <DatePicker
                selected={startDate}
                selectsStart
                startDate={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="from"
                customInput={
                  <InputWithIcons clearValue={() => setStartDate(null)} />
                }
              />
            </div>
            <div className="">
              <DatePicker
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                onChange={(date) => setEndDate(date)}
                customInput={<InputWithIcons />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

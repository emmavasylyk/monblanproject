"use client";

import React, { forwardRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Calendar from "../../public/icons/calendar.svg";
import Plus from "../../public/icons/plus.svg";
import list from "../../src/data/list.json";

function Header() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date("2016/12/09"));

  const InputWithIcons = forwardRef(
    ({ value, onClick, onChange, clearValue, placeholder }, ref) => (
      <div className="relative" onClick={onClick}>
        <input
          value={value}
          onClick={onClick}
          onChange={onChange}
          className="h-7 rounded border text-[13px] leading-[1.2] outline-[#DEDEDE] border-[#DEDEDE] text-[#636264] !pl-2 pr-[29px]"
          readOnly
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={clearValue}
          className="absolute right-6 top-0 p-0.5 px-px bg-[#EBEBEB] cursor-pointer border-l border-l-[#DEDEDE]"
        >
          <Plus className="w-6 h-6 fill-[#5F5F5F]" />
        </button>
        <button
          type="button"
          className="absolute right-0 top-0 p-0.5 px-px bg-[#EBEBEB] cursor-pointer border-l border-l-[#DEDEDE]"
        >
          <Calendar className=" w-6 h-6 fill-[#5F5F5F]" />
        </button>
      </div>
    )
  );

  InputWithIcons.displayName = "InputWithIcons";

  return (
    <div className="bg-white/[67%] shadow-grayy smOnly:-mx-6 md:-mx-8">
      <div className="md:flex md:gap-[86px] gap-4 md:justify-center pt-4 md:pt-[6px] pb-7">
        <Link href="/">
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={138}
            height={138}
            className="w-[86px] h-[86px] smOnly:mb-4 md:w-[120px] smOnly:mx-auto md:h-[120px] xl:w-[138px] xl:h-[138px]"
          />
        </Link>
        <div className="xl:pt-[27px] md:pt-6">
          <div className="mb-[15px] flex items-center gap-[6px] md:gap-4 smOnly:justify-center">
            <h1 className="font-montserrat text-black font-medium -tracking-[0.24px] text-[24px] leading-[1.2]">
              monblanproject
            </h1>
            <p className="text-[#3D8EDA] text-[13px] -tracking-[0.39px] leading-[1.2] rounded-sm border border-[#3D8EDA] px-3 pt-[6px] pb-[7px] inline-block md:block">
              Start on 17-02-2016
            </p>
          </div>
          <ul className="flex items-center mb-[19px] smOnly:justify-center">
            {list.map((item, index) => (
              <li
                key={index}
                className={`text-[14px] leading-[1.15] ${item.class}`}
              >
                <span className="font-bold">{item.quantity}</span> {item.text}
              </li>
            ))}
          </ul>
          <div className="flex gap-[11px] items-center smOnly:justify-center">
            <p className="text-base md:block hidden">Date</p>
            <div className="flex smOnly:flex-col smOnly:gap-5 items-center md:w-[396px] smOnly:justify-center md:justify-between">
              <div>
                <DatePicker
                  selected={startDate}
                  selectsStart
                  startDate={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="from"
                  customInput={
                    <InputWithIcons
                      placeholder="from"
                      clearValue={() => setStartDate(null)}
                    />
                  }
                />
              </div>
              <div>
                <DatePicker
                  selected={endDate}
                  selectsEnd
                  endDate={endDate}
                  onChange={(date) => setEndDate(date)}
                  placeholderText="to"
                  customInput={
                    <InputWithIcons
                      placeholder="to"
                      clearValue={() => setEndDate(null)}
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

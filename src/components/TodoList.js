"use client";
import React, { useState } from "react";
import data from "../../src/data/data.json";
import Rows from "../../public/icons/rows.svg";
import Tiles from "../../public/icons/tiles.svg";

import TodoItem from "./TodoItem";

import clsx from "clsx";

function TodoList() {
  const [viewMode, setViewMode] = useState("rows");

  return (
    <div className="w-[836px] mx-auto pt-[18px]">
      <div className="flex gap-[21px] justify-end mb-[22px]">
        <button
          type="button"
          onClick={() => setViewMode("rows")}
          className={viewMode === "rows" ? "fill-blue" : "fill-[#C8C8C8]"}
        >
          <Rows className="w-[22px] h-[22px]" />
        </button>
        <button
          type="button"
          onClick={() => setViewMode("tiles")}
          className={viewMode === "tiles" ? "fill-blue" : "fill-[#C8C7C7]"}
        >
          <Tiles className="w-[24px] h-[22px]" />
        </button>
      </div>
      <ul
        className={clsx(
          "grid",
          viewMode === "rows" ? "gap-2" : "grid-cols-4 gap-y-4 gap-x-2"
        )}
      >
        {data.map((item, index) => (
          <TodoItem viewMode={viewMode} item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

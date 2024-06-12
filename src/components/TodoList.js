"use client";
import React, { useState } from "react";
import clsx from "clsx";

import TodoItem from "./TodoItem";
import data from "../../src/data/data.json";
import Rows from "../../public/icons/rows.svg";
import Tiles from "../../public/icons/tiles.svg";

function TodoList() {
  const [viewMode, setViewMode] = useState("rows");
  const [visibleCarts, setVisibleCarts] = useState(8);

  const totalCarts = data.length;

  const loadMore = () => {
    setVisibleCarts((prevCarts) => Math.min(prevCarts + 8, totalCarts));
  };

  return (
    <section className="xl:w-[836px] mx-auto pt-[18px] pb-[61px]">
      <div className="flex gap-[21px] justify-end mb-[23px]">
        <button
          type="button"
          onClick={() => setViewMode("rows")}
          className={viewMode === "rows" ? "fill-blue" : "fill-[#C8C8C8]"}
        >
          <Tiles className="w-[24px] h-[22px]" />
        </button>
        <button
          type="button"
          onClick={() => setViewMode("tiles")}
          className={viewMode === "tiles" ? "fill-blue" : "fill-[#C8C7C7]"}
        >
          <Rows className="w-[22px] h-[22px]" />
        </button>
      </div>
      <ul
        className={clsx(
          "grid",
          viewMode === "rows"
            ? "gap-2 mb-[33px]"
            : "xl:grid-cols-4 gap-y-4 gap-x-2 mb-6 md:grid-cols-3 grid-cols-2"
        )}
      >
        {data.slice(0, visibleCarts).map((item, index) => (
          <TodoItem viewMode={viewMode} item={item} key={index} />
        ))}
      </ul>
      <button
        type="button"
        onClick={loadMore}
        disabled={visibleCarts >= totalCarts}
        className={clsx(
          "block w-full max-w-[111px] mx-auto uppercase text-[#929292] px-[25px] py-2 rounded-[14px] border font-medium text-[11px] leading-[1.2] -tracking-[0.33px]",
          {
            "cursor-not-allowed opacity-50": visibleCarts >= totalCarts,
            "border-[#929292]": visibleCarts < totalCarts,
          }
        )}
      >
        {visibleCarts >= totalCarts ? "NO MORE" : "LOAD MORE"}
      </button>
    </section>
  );
}

export default TodoList;

import React from "react";
import Image from "next/image";
import Heart from "../../public/icons/heart.svg";
import Comment from "../../public/icons/comment.svg";

import clsx from "clsx";

function TodoItem({ item, viewMode }) {
  return (
    <li
      className={clsx(
        "bg-white",
        viewMode === "rows" ? "flex items-center" : ""
      )}
    >
      <Image
        src={item.image}
        className={clsx(
          viewMode === "rows"
            ? "w-[86px] h-[86px] mr-[30px]"
            : "w-[203px] h-[203px]"
        )}
        alt="image"
        width={86}
        height={86}
      />
      <div
        className={clsx(
          viewMode === "rows" ? "flex items-center gap-[168px]" : "p-3"
        )}
      >
        <ul
          className={clsx(
            "flex",
            viewMode === "rows" ? "gap-[160px]" : "justify-between mb-6"
          )}
        >
          {item.metrics.map((metric, index) => (
            <li key={index}>
              <p
                className={clsx(
                  "font-medium text-base",
                  viewMode === "rows" ? "mb-2" : "mb-[7px]"
                )}
              >
                {metric.date}
              </p>
              <div
                className={clsx(
                  viewMode === "rows" ? "flex gap-[18px]" : "grid gap-[6px]"
                )}
              >
                <div className="flex items-center gap-[6px]">
                  <Heart className="w-[18px] h-[18px]" />
                  <span className="font-medium text-sm">{metric.likes}</span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <Comment className="w-[18px] h-[18px]" />
                  <span className="font-medium text-sm">{metric.comments}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div
          className={clsx(
            viewMode === "rows" ? "" : "flex items-center justify-between"
          )}
        >
          <p className="font-medium text-base">Image upload</p>
          <p className="font-medium text-sm">{item.upload_date}</p>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;

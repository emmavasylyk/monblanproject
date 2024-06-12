import React from "react";
import Image from "next/image";
import clsx from "clsx";

import Heart from "../../public/icons/heart.svg";
import Comment from "../../public/icons/comment.svg";

function TodoItem({ item, viewMode }) {
  return (
    <li
      className={clsx(
        "bg-white",
        viewMode === "rows" ? "flex items-center smOnly:gap-3" : ""
      )}
    >
      <Image
        quality={100}
        src={item.image}
        className={clsx(
          viewMode === "rows"
            ? "w-[86px] h-[86px] md:mr-[30px] xsOnly:h-auto xsOnly:w-full"
            : "w-full xl:max-w-[203px] min-w-[132px] md:min-w-[120px]"
        )}
        alt="image"
        width={86}
        height={86}
      />
      <div
        className={clsx(
          viewMode === "rows"
            ? "flex items-center smOnly:flex-wrap xl:gap-[168px] md:gap-[120px] extra:!gap-x-6"
            : "md:p-3 p-1"
        )}
      >
        <ul
          className={clsx(
            "flex",
            viewMode === "rows"
              ? "xl:gap-[160px] md:gap-[120px] smOnly:mb-2 gap-y-2 gap-x-6 smOnly:flex-wrap extra:!mb-0 "
              : "justify-between mb-6 "
          )}
        >
          {item.metrics.map((metric, index) => (
            <li key={index} className={clsx(viewMode === "rows" ? "" : "")}>
              <p
                className={clsx(
                  "font-medium md:text-base text-sm",
                  viewMode === "rows" ? "md:mb-2" : "mb-[7px]"
                )}
              >
                {metric.date}
              </p>
              <div
                className={clsx(
                  viewMode === "rows"
                    ? "flex md:gap-[18px] gap-2"
                    : "grid gap-[6px]"
                )}
              >
                <div className="flex items-center gap-[6px]">
                  <Heart className="w-[18px] h-[18px]" />
                  <span className="font-medium md:text-sm text-xs">
                    {metric.likes}
                  </span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <Comment className="w-[18px] h-[18px]" />
                  <span className="font-medium md:text-sm text-xs">
                    {metric.comments}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div
          className={clsx(
            viewMode === "rows"
              ? "smOnly:flex smOnly:items-center smOnly:gap-3 xsOnly:flex-col xsOnly:!items-start xsOnly:!gap-0 extra:flex-col extra:!gap-0 extra:!items-start"
              : "flex items-center justify-between"
          )}
        >
          <p className="font-medium md:text-base text-sm">Image upload</p>
          <p className="font-medium md:text-sm text-xs">{item.upload_date}</p>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;

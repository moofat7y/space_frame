import React from "react";
import { twMerge } from "tailwind-merge";

export default function Tab({
  indexNumber,
  currentActiveNumber,
  setActiveTab,
  children,
}) {
  return (
    <div
      onClick={() => setActiveTab(indexNumber)}
      className={twMerge(
        "cursor-pointer font-medium text-lg md:text-xl text-[#FFFFFF99] border-b-2 border-transparent pb-3",
        indexNumber === currentActiveNumber &&
          "text-[#FFFFFF] border-secondary-500"
      )}
    >
      {children}
    </div>
  );
}

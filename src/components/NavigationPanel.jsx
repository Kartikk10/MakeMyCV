import React, { useState } from "react";
import clsx from "clsx";
import { FaRegFileAlt } from "react-icons/fa";
import { FaPenRuler } from "react-icons/fa6";

function NavigationPanel({ activeTab, onTabChange }) {
  return (
    <nav
      className="h-fit py-3.5 px-2 bg-white flex flex-col gap-y-0.75 rounded-xl font-semibold"
      style={{
        boxShadow:
          "0 13px 27px -5px rgba(50, 50, 93, .1), 0 8px 16px -8px rgba(0, 0, 0, .25)",
      }}
    > 
      <button
        type="button"
        className={clsx(
          "py-3 px-1 flex flex-col items-center justify-center gap-y-2 rounded-xl cursor-pointer transition-colors duration-300",
          activeTab === "contentTab"
            ? "bg-[#f3f4f6] text-[#0e374e]"
            : "bg-white text-black"
        )}
        onClick={() => onTabChange("contentTab")}
      >
        <FaRegFileAlt className="text-lg sm:text-xl" />
        <p className="text-sm sm:text-base">Content</p>
      </button>
      <button
        type="button"
        className={clsx(
          "py-3 px-1 flex flex-col items-center justify-center gap-y-2 rounded-xl cursor-pointer transition-colors duration-300",
          activeTab === "customizeTab"
            ? "bg-[#f3f4f6] text-[#0e374e]"
            : "bg-white text-black"
        )}
        onClick={() => onTabChange("customizeTab")}
      >
        <FaPenRuler className="text-lg sm:text-xl" />
        <p className="text-sm sm:text-base">Customize</p>
      </button>
    </nav>
  );
}

export default NavigationPanel;

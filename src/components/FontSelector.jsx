import React from "react";

function FontSelector({ accentColor, selectedFont, onSelectedFontChange, textColor }) {
  return (
    <div className="w-full p-4.5 bg-white rounded-xl">
      <h2 className="mb-3.5 text-xl sm:text-2xl font-bold">Fonts</h2>
      <div className="flex justify-start gap-6 md:gap-0 md:justify-around">
        <button
          type="button"
          className="w-[60px] h-[70px] py-2 px-3 border-1 border-black rounded-lg flex flex-col items-center justify-between font-serif cursor-pointer transition-colors duration-300"
          style={
            selectedFont === "serif"
              ? { backgroundColor: accentColor, color: textColor }
              : {}
          }
          onClick={() => onSelectedFontChange("serif")}
        >
          <p className="text-lg sm:text-2xl font-semibold">Aa</p>
          <p className="text-sm sm:text-base">Serif</p>
        </button>
        <button
          type="button"
          className="w-[60px] h-[70px] py-2 px-3 border-1 border-black rounded-lg flex flex-col items-center justify-between font-sans cursor-pointer transition-colors duration-300"
          style={
            selectedFont === "sans-serif"
              ? { backgroundColor: accentColor, color: textColor }
              : {}
          }
          onClick={() => onSelectedFontChange("sans-serif")}
        >
          <p className="text-lg sm:text-2xl font-semibold">Aa</p>
          <p className="text-sm sm:text-base">Sans</p>
        </button>
        <button
          type="button"
          className="w-[60px] h-[70px] py-2 px-3 border-1 border-black rounded-lg flex flex-col items-center justify-between font-mono cursor-pointer transition-colors duration-300"
          style={
            selectedFont === "monospace"
              ? { backgroundColor: accentColor, color: textColor }
              : {}
          }
          onClick={() => onSelectedFontChange("monospace")}
        >
          <p className="text-lg sm:text-2xl font-semibold">Aa</p>
          <p className="text-sm sm:text-base">Mono</p>
        </button>
      </div>
    </div>
  );
}

export default FontSelector;

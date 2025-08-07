import React, { useState } from "react";

function ColorCustomizer({ accentColor, onAccentColorChange }) {
  return (
    <div className="w-full p-4.5 bg-white rounded-xl">
      <h2 className="mb-3.5 text-xl sm:text-2xl font-bold">Color</h2>
      <div className="flex gap-x-2 items-center">
        <label htmlFor="colorSelector" className="text-sm sm:text-[17px]">
          Accent Color
        </label>
        <div
          className="w-8 h-8 p-0 rounded-full cursor-pointer relative overflow-hidden"
          style={{
            backgroundColor: accentColor,
            boxShadow: "0 8px 24px #959da5",
          }}
        >
          <input
            type="color"
            name="colorSelector"
            id="colorSelector"
            value={accentColor}
            onChange={(e) => onAccentColorChange(e.target.value)}
            className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer text-sm sm:text-base"
          />
        </div>
      </div>
    </div>
  );
}

export default ColorCustomizer;

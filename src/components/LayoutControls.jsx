import React from "react";

function LayoutControls({
  setSelectedLayout,
  accentColor,
  onAccentColorChange,
}) {
  return (
    <div className="w-full p-4.5 bg-white rounded-xl">
      <h2 className="mb-3.5 text-xl sm:text-2xl font-bold">Layout</h2>
      <div className="flex justify-start gap-6 text-sm sm:text-base md:gap-0 md:justify-around">
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setSelectedLayout("top")}
        >
          <div
            className="w-12.5 h-12.5 border-1 border-[gray] rounded-lg"
            style={{
              background: `linear-gradient(180deg, ${accentColor} 50%, white 50%)`,
            }}
          ></div>
          <p>Top</p>
        </button>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setSelectedLayout("left")}
        >
          <div
            className="w-12.5 h-12.5 border-1 border-[gray] rounded-lg"
            style={{
              background: `linear-gradient(90deg, ${accentColor} 50%, white 50%)`,
            }}
          ></div>
          <p>Left</p>
        </button>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setSelectedLayout("right")}
        >
          <div
            className="w-12.5 h-12.5 border-1 border-[gray] rounded-lg"
            style={{
              background: `linear-gradient(90deg, white 50%, ${accentColor} 50%)`,
            }}
          ></div>
          <p>Right</p>
        </button>
      </div>
    </div>
  );
}

export default LayoutControls;

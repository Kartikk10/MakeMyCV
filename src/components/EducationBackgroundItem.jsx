import clsx from "clsx";
import React from "react";

function EducationBackgroundItem({ educationDetail, selectedLayout }) {
  const { startDate, endDate, location, institutionName, qualification } =
    educationDetail;
  return (
    <div
      className={clsx(
        "mb-10 sm:mb-6 flex flex-col gap-x-4.5 break-inside-avoid text-xs sm:text-sm",
        selectedLayout === "top" && "sm:flex-row md:text-base",
        (selectedLayout === "left" || selectedLayout === "right") &&
          "lg:flex-row lg:text-base"
      )}
    >
      <div className="min-w-[150px] max-w-[150px]">
        <p>
          {startDate} <span>-</span> {endDate}
        </p>
        <p>{location}</p>
      </div>
      <div>
        <p className="font-extrabold">{institutionName}</p>
        <p>{qualification}</p>
      </div>
    </div>
  );
}

export default EducationBackgroundItem;

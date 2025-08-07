import clsx from "clsx";
import React from "react";

function WorkExperienceItem({ experienceDetail, selectedLayout }) {
  const {
    startDate,
    endDate,
    location,
    companyName,
    positionTitle,
    jobDescription,
  } = experienceDetail;
  return (
    <div
      className={clsx(
        "mb-10 sm:mb-6 flex flex-col gap-y-2.5 gap-x-4.5 print:break-inside-avoid text-xs sm:text-sm",
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
        <p className="font-extrabold">{companyName}</p>
        <p>{positionTitle}</p>
        <p className="mt-1">{jobDescription}</p>
      </div>
    </div>
  );
}

export default WorkExperienceItem;

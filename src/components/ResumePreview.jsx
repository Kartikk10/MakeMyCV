import React from "react";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import EducationBackgroundList from "./EducationBackgroundList";
import EducationBackgroundItem from "./EducationBackgroundItem";
import WorkExperienceList from "./WorkExperienceList";
import WorkExperienceItem from "./WorkExperienceItem";
import clsx from "clsx";

function ResumePreview({
  selectedLayout,
  accentColor,
  selectedFont,
  textColor,
  personalDetails,
  educationDetails,
  experienceDetails,
  isResumeCleared,
  resumePreviewRef,
  screenWidth
}) {
  const { name, phoneNumber, email, address } = personalDetails;

  if (isResumeCleared) {
    return (
      <div
        className={clsx(
          "w-full md:w-auto xl:w-[794px] min-h-[1122px] md:h-full bg-white m-auto",
          selectedLayout === "left" && "flex flex-row ",
          selectedLayout === "right" && "flex flex-row-reverse"
        )}
      >
        <div
          className={clsx(
            "py-18 px-6",
            (selectedLayout === "left" || selectedLayout === "right") && "w-1/3"
          )}
          style={{ backgroundColor: accentColor }}
        ></div>
      </div>
    );
  }

  return (
    <div
      id="resumePreviewContainer"
      className={clsx(
        "w-full md:w-auto xl:w-[794px] min-h-[1122px] md:min-h-full m-auto bg-white text-base page-break force-page-height print:w-full print:min-h-[1122px] print:md:min-h-[1122px]",
        selectedLayout === "left" && "flex flex-row items-stretch",
        selectedLayout === "right" && "flex flex-row-reverse items-stretch"
      )}
      style={{ fontFamily: selectedFont }}
      ref={resumePreviewRef}
    >
      <div
        className={clsx(
          "py-9 px-6 flex flex-col items-center gap-y-3",
          selectedLayout === "top" && "w-full",
          (selectedLayout === "left" || selectedLayout === "right") &&
            "w-2/5 lg:w-1/3 min-h-full print:break-inside-avoid print:min-h-[1122px] print:md:min-h-[1122px] print:overflow-visible"
        )}
        style={{
          backgroundColor: accentColor,
          color: textColor,
          height: selectedLayout === "top" ? "auto" : "",
        }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-center">
          {name}
        </h1>
        <div
          className={clsx(
            "text-xs sm:text-sm md:mt-4 md:text-base flex gap-4.5 flex-col",
            selectedLayout === "top" && "lg:flex-row",
            (selectedLayout === "left" || selectedLayout === "right") &&
              "flex-col"
          )}
        >
          <div
            className={clsx(
              "flex items-center justify-center gap-y-2 gap-x-1.5",
              (selectedLayout === "left" || selectedLayout === "right") &&
                "flex-col lg:flex-row"
            )}
          >
            <FaEnvelope />
            <span>{email}</span>
          </div>
          <div
            className={clsx(
              "flex items-center justify-center gap-y-2 gap-x-1.5",
              (selectedLayout === "left" || selectedLayout === "right") &&
                "flex-col lg:flex-row"
            )}
          >
            <FaPhone />
            <span>{phoneNumber}</span>
          </div>
          <div
            className={clsx(
              "flex items-center justify-center gap-y-2 gap-x-1.5",
              (selectedLayout === "left" || selectedLayout === "right") &&
                "flex-col lg:flex-row"
            )}
          >
            <FaLocationDot />
            <span>{address}</span>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          (selectedLayout === "left" || selectedLayout === "right") &&
            "w-3/5 lg:w-2/3 min-h-full print:min-h-[1122px] print:md:min-h-[1122px]",
          "h-full"
        )}
      >
        <div className="mt-10 px-7 xl:px-14">
          <h3
            className="py-1 mb-3 flex justify-center items-center rounded-xs text-lg text-center font-bold"
            style={{
              backgroundColor: accentColor,
              color: textColor,
            }}
          >
            Education
          </h3>
          <EducationBackgroundList
            educationDetails={educationDetails}
            selectedLayout={selectedLayout}
            screenWidth={screenWidth}
          />
        </div>
        <div className="mt-10 px-7 xl:px-14">
          <h3
            className="py-1 mb-3 flex justify-center items-center rounded-xs text-lg text-center font-bold"
            style={{
              backgroundColor: accentColor,
              color: textColor,
            }}
          >
            Professional Experience
          </h3>
          <WorkExperienceList
            experienceDetails={experienceDetails}
            selectedLayout={selectedLayout}
            screenWidth={screenWidth}
          />
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;

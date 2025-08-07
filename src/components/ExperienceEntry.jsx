import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

function ExperienceEntry({
  experienceDetails,
  experienceDetail,
  setExperienceDetails,
  setIsExperienceFormOpen,
  setSelectedExperienceEntry,
  setEditingExperienceEntry,
}) {
  const { companyName, hidden } = experienceDetail;

  const handleEditExperienceEntry = () => {
    setIsExperienceFormOpen(true);
    setSelectedExperienceEntry(experienceDetail);
    setEditingExperienceEntry(true);
  };
  
  const handleHideEntry = (e) => {
    e.stopPropagation();
    setExperienceDetails((prev) =>
      prev.map((detail) =>
        detail.id === experienceDetail.id ? { ...detail, hidden: true } : detail
      )
    );
  };
  
  const handleShowEntry = (e) => {
    e.stopPropagation();
    setExperienceDetails((prev) =>
      prev.map((detail) =>
        detail.id === experienceDetail.id
          ? { ...detail, hidden: false }
          : detail
      )
    );
  };

  return (
    <button
      type="button"
      className="w-full bg-white py-3 pl-6 pr-[11px] border-t-5 border-t-[#f3f4f6] flex justify-between items-center text-sm sm:text-[17px] font-semibold cursor-pointer"
      style={
        experienceDetails.indexOf(experienceDetail) ===
        experienceDetails.length - 1
          ? { borderBottom: "5px solid #f3f4f6" }
          : {}
      }
      onClick={handleEditExperienceEntry}
    >
      <p className="text-left">{companyName}</p>
      {!hidden ? (
        <FaRegEye
          className="text-[#4d4d4d] text-lg p-2.5 w-[42.5px] h-fit hover:text-black"
          onClick={handleHideEntry}
        />
      ) : (
        <FaRegEyeSlash
          className="text-[#4d4d4d] text-lg p-2.5 w-[42.5px] h-fit hover:text-black"
          onClick={handleShowEntry}
        />
      )}
    </button>
  );
}

export default ExperienceEntry;

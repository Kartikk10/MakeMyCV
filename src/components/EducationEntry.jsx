import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

function EducationEntry({
  educationDetails,
  educationDetail,
  setEducationDetails,
  setIsEducationFormOpen,
  setSelectedEducationEntry,
  setEditingEducationEntry,
}) {
  const { institutionName, hidden } = educationDetail;

  const handleEditEducationEntry = () => {
    setIsEducationFormOpen(true);
    setSelectedEducationEntry(educationDetail);
    setEditingEducationEntry(true);
  };

  const handleHideEntry = (e) => {
    e.stopPropagation();
    setEducationDetails((prev) =>
      prev.map((detail) =>
        detail.id === educationDetail.id ? { ...detail, hidden: true } : detail
      )
    );
  };

  const handleShowEntry = (e) => {
    e.stopPropagation();
    setEducationDetails((prev) =>
      prev.map((detail) =>
        detail.id === educationDetail.id ? { ...detail, hidden: false } : detail
      )
    );
  };

  return (
    <button
      type="button"
      className="w-full bg-white py-3 pl-6 pr-[11px] border-t-5 border-t-[#f3f4f6] flex justify-between items-center text-sm sm:text-[17px] font-semibold cursor-pointer"
      style={
        educationDetails.indexOf(educationDetail) ===
        educationDetails.length - 1
          ? { borderBottom: "5px solid #f3f4f6" }
          : {}
      }
      onClick={handleEditEducationEntry}
    >
      <p className="text-left">{institutionName}</p>
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

export default EducationEntry;

import React, { useState } from "react";
import EducationForm from "./EducationForm";
import { FaGraduationCap } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import EducationEntries from "./EducationEntries";

function EducationSection({
  isEducationSectionExpanded,
  setIsEducationSectionExpanded,
  setIsExperienceSectionExpanded,
  isEducationFormOpen,
  setIsEducationFormOpen,
  isExperienceFormOpen,
  setIsExperienceFormOpen,
  educationDetails,
  setEducationDetails,
  wasExperienceFormOpenBeforeCollapse,
  setWasExperienceFormOpenBeforeCollapse,
  setIsResumeCleared,
}) {
  const [selectedEducationEntry, setSelectedEducationEntry] = useState(null);
  const [editingEducationEntry, setEditingEducationEntry] = useState(false);
  const [
    wasEducationFormOpenBeforeCollapse,
    setWasEducationFormOpenBeforeCollapse,
  ] = useState(false);

  const handleSectionToggle = () => {
    setIsEducationSectionExpanded((prev) => {
      if (prev) {
        isEducationFormOpen && setWasEducationFormOpenBeforeCollapse(true);
        setIsEducationFormOpen(false);
      } else {
        wasEducationFormOpenBeforeCollapse && setIsEducationFormOpen(true);
        setWasEducationFormOpenBeforeCollapse(false);
      }
      setIsExperienceSectionExpanded(false);
      setIsExperienceFormOpen(false);
      isExperienceFormOpen && setWasExperienceFormOpenBeforeCollapse(true);
      return !prev;
    });
  };

  const handleAddEducationEntry = () => {
    setIsEducationFormOpen(true);
  };

  const addEducationEntryButton = (
    <button
      type="button"
      className="my-4.5 mx-auto py-2 px-4.5 border-4 border-[#eef0f4] rounded-full flex items-center gap-x-2 text-[13.3333px] font-bold cursor-pointer"
      onClick={handleAddEducationEntry}
    >
      <FaPlus />
      <span>Education</span>
    </button>
  );

  return (
    <section
      className="w-full bg-white rounded-xl"
      style={{
        boxShadow:
          "0 13px 27px -5px rgba(50, 50, 93, .1), 0 8px 16px -8px rgba(0, 0, 0, .25)",
      }}
    >
      <button
        type="button"
        className="w-full p-6 flex justify-between items-center cursor-pointer"
        onClick={handleSectionToggle}
      >
        <div className="text-lg sm:text-xl font-bold flex justify-center items-center gap-x-3">
          <FaGraduationCap className="w-6.25 h-5" />
          <span>Education</span>
        </div>
        <FaChevronDown
          className="transition-transform duration-300"
          style={
            isEducationSectionExpanded ? { transform: "rotate(180deg)" } : {}
          }
        />
      </button>
      {isEducationSectionExpanded && !isEducationFormOpen && (
        <EducationEntries
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
          setIsEducationFormOpen={setIsEducationFormOpen}
          setSelectedEducationEntry={setSelectedEducationEntry}
          setEditingEducationEntry={setEditingEducationEntry}
        />
      )}
      {isEducationSectionExpanded &&
        !isEducationFormOpen &&
        addEducationEntryButton}
      {isEducationFormOpen && (
        <EducationForm
          setIsEducationFormOpen={setIsEducationFormOpen}
          setEducationDetails={setEducationDetails}
          selectedEducationEntry={selectedEducationEntry}
          setSelectedEducationEntry={setSelectedEducationEntry}
          editingEducationEntry={editingEducationEntry}
          setEditingEducationEntry={setEditingEducationEntry}
          setIsResumeCleared={setIsResumeCleared}
        />
      )}
    </section>
  );
}

export default EducationSection;

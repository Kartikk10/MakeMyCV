import React, { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import { FaBriefcase } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import ExperienceEntries from "./ExperienceEntries";

function ExperienceSection({
  isExperienceSectionExpanded,
  setIsExperienceSectionExpanded,
  isEducationSectionExpanded,
  setIsEducationSectionExpanded,
  isExperienceFormOpen,
  setIsExperienceFormOpen,
  isEducationFormOpen,
  experienceDetails,
  setExperienceDetails,
  wasExperienceFormOpenBeforeCollapse,
  setWasExperienceFormOpenBeforeCollapse,
  setIsResumeCleared,
}) {
  const [selectedExperienceEntry, setSelectedExperienceEntry] = useState(null);
  const [editingExperienceEntry, setEditingExperienceEntry] = useState(false);

  if (isEducationFormOpen) {
    return null;
  }

  const handleSectionToggle = () => {
    setIsExperienceSectionExpanded((prev) => {
      if (prev) {
        isExperienceFormOpen && setWasExperienceFormOpenBeforeCollapse(true);
        setIsExperienceFormOpen(false);
      } else {
        wasExperienceFormOpenBeforeCollapse && setIsExperienceFormOpen(true);
        setWasExperienceFormOpenBeforeCollapse(false);
      }
      setIsEducationSectionExpanded(false);
      return !prev;
    });
  };

  const handleAddExperienceEntry = () => {
    setIsExperienceFormOpen(true);
  };

  const addExperienceEntryButton = (
    <button
      type="button"
      className="my-4.5 mx-auto py-2 px-4.5 border-4 border-[#eef0f4] rounded-full flex items-center gap-x-2 text-[13.3333px] font-bold cursor-pointer"
      onClick={handleAddExperienceEntry}
    >
      <FaPlus />
      <span>Experience</span>
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
          <FaBriefcase className="w-6.25 h-5" />
          <span>Experience</span>
        </div>
        <FaChevronDown
          className="transition-transform duration-300"
          style={
            isExperienceSectionExpanded ? { transform: "rotate(180deg)" } : {}
          }
        />
      </button>
      {isExperienceSectionExpanded && !isExperienceFormOpen && (
        <ExperienceEntries
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
          setIsExperienceFormOpen={setIsExperienceFormOpen}
          setSelectedExperienceEntry={setSelectedExperienceEntry}
          setEditingExperienceEntry={setEditingExperienceEntry}
        />
      )}
      {isExperienceSectionExpanded &&
        !isExperienceFormOpen &&
        addExperienceEntryButton}
      {isExperienceFormOpen && (
        <ExperienceForm
          setIsExperienceFormOpen={setIsExperienceFormOpen}
          setExperienceDetails={setExperienceDetails}
          selectedExperienceEntry={selectedExperienceEntry}
          setSelectedExperienceEntry={setSelectedExperienceEntry}
          editingExperienceEntry={editingExperienceEntry}
          setEditingExperienceEntry={setEditingExperienceEntry}
          setIsResumeCleared={setIsResumeCleared}
        />
      )}
    </section>
  );
}

export default ExperienceSection;

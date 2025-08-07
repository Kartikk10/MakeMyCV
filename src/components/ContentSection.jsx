import React, { useState } from "react";
import PersonalDetailsForm from "./PersonalDetailsForm";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

function ContentSection({
  personalDetails,
  setPersonalDetails,
  isEducationFormOpen,
  setIsEducationFormOpen,
  isExperienceFormOpen,
  setIsExperienceFormOpen,
  educationDetails,
  setEducationDetails,
  experienceDetails,
  setExperienceDetails,
  setIsResumeCleared,
}) {
  const [isEducationSectionExpanded, setIsEducationSectionExpanded] =
    useState(false);
  const [isExperienceSectionExpanded, setIsExperienceSectionExpanded] =
    useState(false);
  const [
    wasExperienceFormOpenBeforeCollapse,
    setWasExperienceFormOpenBeforeCollapse,
  ] = useState(false);

  return (
    <div className="w-full flex flex-col gap-y-7">
      <PersonalDetailsForm
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        setIsResumeCleared={setIsResumeCleared}
      />
      <EducationSection
        isEducationSectionExpanded={isEducationSectionExpanded}
        setIsEducationSectionExpanded={setIsEducationSectionExpanded}
        setIsExperienceSectionExpanded={setIsExperienceSectionExpanded}
        isEducationFormOpen={isEducationFormOpen}
        setIsEducationFormOpen={setIsEducationFormOpen}
        isExperienceFormOpen={isExperienceFormOpen}
        setIsExperienceFormOpen={setIsExperienceFormOpen}
        educationDetails={educationDetails}
        setEducationDetails={setEducationDetails}
        wasExperienceFormOpenBeforeCollapse={
          wasExperienceFormOpenBeforeCollapse
        }
        setWasExperienceFormOpenBeforeCollapse={
          setWasExperienceFormOpenBeforeCollapse
        }
        setIsResumeCleared={setIsResumeCleared}
      />
      <ExperienceSection
          isExperienceSectionExpanded={isExperienceSectionExpanded}
          setIsExperienceSectionExpanded={setIsExperienceSectionExpanded}
          isEducationSectionExpanded={isEducationSectionExpanded}
          setIsEducationSectionExpanded={setIsEducationSectionExpanded}
          isExperienceFormOpen={isExperienceFormOpen}
          setIsExperienceFormOpen={setIsExperienceFormOpen}
          isEducationFormOpen={isEducationFormOpen}
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
          wasExperienceFormOpenBeforeCollapse={
            wasExperienceFormOpenBeforeCollapse
          }
          setWasExperienceFormOpenBeforeCollapse={
            setWasExperienceFormOpenBeforeCollapse
          }
          setIsResumeCleared={setIsResumeCleared}
        />
    </div>
  );
}

export default ContentSection;

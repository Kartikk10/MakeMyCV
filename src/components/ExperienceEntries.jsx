import React from "react";
import ExperienceEntry from "./ExperienceEntry";

function ExperienceEntries({
  experienceDetails,
  setExperienceDetails,
  setIsExperienceFormOpen,
  setSelectedExperienceEntry,
  setEditingExperienceEntry,
}) {
  const experienceEntriesList = experienceDetails.map((experienceDetail) => (
    <ExperienceEntry
      key={experienceDetail.id}
      experienceDetails={experienceDetails}
      experienceDetail={experienceDetail}
      setExperienceDetails={setExperienceDetails}
      setIsExperienceFormOpen={setIsExperienceFormOpen}
      setSelectedExperienceEntry={setSelectedExperienceEntry}
      setEditingExperienceEntry={setEditingExperienceEntry}
    />
  ));
  return <>{experienceEntriesList}</>;
}

export default ExperienceEntries;

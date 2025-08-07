import React from "react";
import EducationEntry from "./EducationEntry";

function EducationEntries({
  educationDetails,
  setEducationDetails,
  setIsEducationFormOpen,
  setSelectedEducationEntry,
  setEditingEducationEntry,
}) {
  const educationEntriesList = educationDetails.map((educationDetail) => (
    <EducationEntry
      key={educationDetail.id}
      educationDetails={educationDetails}
      educationDetail={educationDetail}
      setEducationDetails={setEducationDetails}
      setIsEducationFormOpen={setIsEducationFormOpen}
      setSelectedEducationEntry={setSelectedEducationEntry}
      setEditingEducationEntry={setEditingEducationEntry}
    />
  ));

  return <>{educationEntriesList}</>;
}

export default EducationEntries;

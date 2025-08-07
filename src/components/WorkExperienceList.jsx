import React from "react";
import WorkExperienceItem from "./WorkExperienceItem";

function WorkExperienceList({ experienceDetails, selectedLayout, screenWidth }) {
  const experienceDetailsList = experienceDetails
    .filter((experienceDetail) => !experienceDetail.hidden)
    .map((experienceDetail) => (
      <WorkExperienceItem
        key={experienceDetail.id}
        experienceDetail={experienceDetail}
        selectedLayout={selectedLayout}
        screenWidth={screenWidth}
      />
    ));

  return <>{experienceDetailsList}</>;
}

export default WorkExperienceList;

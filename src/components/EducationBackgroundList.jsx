import React from "react";
import EducationBackgroundItem from "./EducationBackgroundItem";

function EducationBackgroundList({ educationDetails, selectedLayout, screenWidth }) {
  const educationDetailsList = educationDetails
    .filter((educationDetail) => !educationDetail.hidden)
    .map((educationDetail) => (
      <EducationBackgroundItem
        key={educationDetail.id}
        educationDetail={educationDetail}
        selectedLayout={selectedLayout}
        screenWidth={screenWidth}
      />
    ));
  return <>{educationDetailsList}</>;
}

export default EducationBackgroundList;

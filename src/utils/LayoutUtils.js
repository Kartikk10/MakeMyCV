export const shouldUseExpandedLayout = (
  educationDetails,
  experienceDetails
) => {
  const maxLength = 22;
  if (educationDetails && experienceDetails) {
    return (
      educationDetails.some(
        (entry) => entry?.institutionName?.length > maxLength
      ) ||
      experienceDetails.some((entry) => entry?.companyName?.length > maxLength)
    );
  }
};

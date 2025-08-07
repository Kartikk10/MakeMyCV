import React from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

function UtilityBar({
  dummyPersonalDetails,
  dummyEducationDetails,
  dummyExperienceDetails,
  personalDetails,
  educationDetails,
  experienceDetails,
  setPersonalDetails,
  setEducationDetails,
  setExperienceDetails,
  isResumeCleared,
  setIsResumeCleared,
}) {
  const handleClearingResume = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You'll lose all progress. Are you absolutely sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, clear it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setPersonalDetails({
          name: "",
          phoneNumber: "",
          email: "",
          address: "",
        });
        setEducationDetails([]);
        setExperienceDetails([]);
        setIsResumeCleared(true);
        Swal.fire("Cleared!", "Your resume has been cleared.", "success");
      }
    });
  };

  const handleLoadingExample = () => {
    const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    if (
      !isResumeCleared &&
      (!isEqual(personalDetails, dummyPersonalDetails) ||
        !isEqual(educationDetails, dummyEducationDetails) ||
        !isEqual(experienceDetails, dummyExperienceDetails))
    ) {
      Swal.fire({
        title: "Are you sure?",
        text: "You'll lose all progress. Are you absolutely sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          setPersonalDetails(dummyPersonalDetails);
          setEducationDetails(dummyEducationDetails);
          setExperienceDetails(dummyExperienceDetails);
          setIsResumeCleared(false);
        }
      });
    } else {
      setPersonalDetails(dummyPersonalDetails);
      setEducationDetails(dummyEducationDetails);
      setExperienceDetails(dummyExperienceDetails);
      setIsResumeCleared(false);
    }
  };

  return (
    <div
      className="w-full p-3 text-[13.5px] font-bold bg-white rounded-xl flex md:flex-col lg:flex-row justify-center items-center gap-2.5 sticky top-2 z-10"
      style={{
        boxShadow:
          "0 13px 27px -5px rgba(50, 50, 93, .1), 0 8px 16px -8px rgba(0, 0, 0, .25)",
      }}
    >
      <button
        type="button"
        className="px-1.5 text-[#b91c1c] flex justify-center items-center gap-x-2 cursor-pointer"
        onClick={handleClearingResume}
      >
        <FaTrash />
        <span>Clear Resume</span>
      </button>
      <button
        type="button"
        className="py-1.5 px-3 bg-[#f3f4f6] rounded-sm cursor-pointer"
        onClick={handleLoadingExample}
      >
        Load Example
      </button>
    </div>
  );
}

export default UtilityBar;

import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

function ExperienceForm({
  setIsExperienceFormOpen,
  setExperienceDetails,
  selectedExperienceEntry,
  setSelectedExperienceEntry,
  editingExperienceEntry,
  setEditingExperienceEntry,
  setIsResumeCleared,
}) {
  const {
    id = "",
    startDate = "",
    endDate = "",
    location = "",
    companyName = "",
    positionTitle = "",
    jobDescription = "",
  } = selectedExperienceEntry || {};

  const [formTouched, setFormTouched] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const checkValid = () =>
      companyNameRef.current?.value &&
      positionTitleRef.current?.value &&
      startDateRef.current?.value &&
      endDateRef.current?.value &&
      locationRef.current?.value &&
      jobDescriptionRef.current?.value;

    setIsFormValid(checkValid());
  }, [selectedExperienceEntry]);

  const companyNameRef = useRef(null);
  const positionTitleRef = useRef(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const locationRef = useRef(null);
  const jobDescriptionRef = useRef(null);

  const handleSaveEntry = (e) => {
    e.preventDefault();
    setIsResumeCleared(false);
    if (
      companyNameRef.current?.value &&
      positionTitleRef.current?.value &&
      startDateRef.current?.value &&
      endDateRef.current?.value &&
      locationRef.current?.value &&
      jobDescriptionRef.current?.value
    ) {
      if (editingExperienceEntry) {
        setExperienceDetails((prev) =>
          prev.map((item) =>
            item.id === id
              ? {
                  ...item,
                  startDate: startDateRef.current.value,
                  endDate: endDateRef.current.value,
                  location: locationRef.current.value,
                  companyName: companyNameRef.current.value,
                  positionTitle: positionTitleRef.current.value,
                  jobDescription: jobDescriptionRef.current.value,
                }
              : item
          )
        );
        toast.success("Entry updated successfully!");
      } else {
        setExperienceDetails((prev) => [
          ...prev,
          {
            id: uuidv4(),
            startDate: startDateRef.current.value,
            endDate: endDateRef.current.value,
            location: locationRef.current.value,
            companyName: companyNameRef.current.value,
            positionTitle: positionTitleRef.current.value,
            jobDescription: jobDescriptionRef.current.value,
            hidden: false,
          },
        ]);
        toast.success("Entry added successfully!");
      }
      setIsExperienceFormOpen(false);
      setSelectedExperienceEntry(null);
      setEditingExperienceEntry(false);
    } else {
      toast.warn("Oops! Make sure all fields are filled before saving.");
    }
  };

  const handleDeleteEntry = () => {
    if (editingExperienceEntry) {
      Swal.fire({
        title: "Delete this entry?",
        text: "You won't be able to undo this.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          setExperienceDetails((prev) => prev.filter((item) => item.id !== id));
          setIsExperienceFormOpen(false);
          setEditingExperienceEntry(false);
          setSelectedExperienceEntry(null);
          toast.error("The entry has been deleted!");
        }
      });
    } else {
      toast.info("Nothing to delete - this entry hasn’t been saved yet.");
    }
  };

  const handleCancel = () => {
    if (
      companyNameRef.current?.value &&
      positionTitleRef.current?.value &&
      startDateRef.current?.value &&
      endDateRef.current?.value &&
      locationRef.current?.value &&
      jobDescriptionRef.current?.value
    ) {
      Swal.fire({
        title: "Discard Changes?",
        text: "Are you sure you want to discard your changes? Unsaved progress will be lost.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          setIsExperienceFormOpen(false);
          setEditingExperienceEntry(false);
          setSelectedExperienceEntry(null);
        }
      });
    } else {
      setIsExperienceFormOpen(false);
      setEditingExperienceEntry(false);
      setSelectedExperienceEntry(null);
    }
  };

  return (
    <form className="p-4.5" onSubmit={handleSaveEntry}>
      <div className="mb-3 flex flex-col gap-y-1.5">
        <label htmlFor="companyName" className="text-sm sm:text-base font-semibold">
          Company Name
        </label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          placeholder="Enter Company Name"
          maxLength={40}
          defaultValue={
            selectedExperienceEntry && editingExperienceEntry ? companyName : ""
          }
          className="p-2.5 h-10 bg-[#f3f4f6] text-xs lg:text-sm placeholder:font-semibold border-2 border-transparent rounded-xl focus:border-[#3b83f6] focus:outline-0"
          ref={companyNameRef}
          onChange={() => setFormTouched((prev) => !prev)}
        />
      </div>
      <div className="mb-3 flex flex-col gap-y-1.5">
        <label htmlFor="positionTitle" className="text-sm sm:text-base font-semibold">
          Position Title
        </label>
        <input
          type="text"
          name="positionTitle"
          id="positionTitle"
          placeholder="Enter Position Title"
          defaultValue={
            selectedExperienceEntry && editingExperienceEntry
              ? positionTitle
              : ""
          }
          className="p-2.5 h-10 bg-[#f3f4f6] text-xs lg:text-sm placeholder:font-semibold border-2 border-transparent rounded-xl focus:border-[#3b83f6] focus:outline-0"
          ref={positionTitleRef}
          onChange={() => setFormTouched((prev) => !prev)}
        />
      </div>
      <div className="mb-3 flex flex-col gap-y-1.5">
        <label htmlFor="startDate" className="text-sm sm:text-base font-semibold">
          Start Date
        </label>
        <input
          type="text"
          name="startDate"
          id="startDate"
          placeholder="Enter Start Date"
          defaultValue={
            selectedExperienceEntry && editingExperienceEntry ? startDate : ""
          }
          className="p-2.5 h-10 bg-[#f3f4f6] text-xs lg:text-sm placeholder:font-semibold border-2 border-transparent rounded-xl focus:border-[#3b83f6] focus:outline-0"
          ref={startDateRef}
          onChange={() => setFormTouched((prev) => !prev)}
        />
      </div>
      <div className="mb-3 flex flex-col gap-y-1.5">
        <label htmlFor="endDate" className="text-sm sm:text-base font-semibold">
          End Date
        </label>
        <input
          type="text"
          name="endDate"
          id="endDate"
          placeholder="Enter End Date"
          defaultValue={
            selectedExperienceEntry && editingExperienceEntry ? endDate : ""
          }
          className="p-2.5 h-10 bg-[#f3f4f6] text-xs lg:text-sm placeholder:font-semibold border-2 border-transparent rounded-xl focus:border-[#3b83f6] focus:outline-0"
          ref={endDateRef}
          onChange={() => setFormTouched((prev) => !prev)}
        />
      </div>
      <div className="mb-3 flex flex-col gap-y-1.5">
        <label htmlFor="location" className="text-sm sm:text-base font-semibold">
          Location <span className="text-[#9ca3af] text-xs ml-1">optional</span>
        </label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Enter Location"
          defaultValue={
            selectedExperienceEntry && editingExperienceEntry ? location : ""
          }
          className="p-2.5 h-10 bg-[#f3f4f6] text-xs lg:text-sm placeholder:font-semibold border-2 border-transparent rounded-xl focus:border-[#3b83f6] focus:outline-0"
          ref={locationRef}
          onChange={() => setFormTouched((prev) => !prev)}
        />
      </div>
      <div className="mb-3 flex flex-col gap-y-1.5">
        <label htmlFor="description" className="text-sm sm:text-base font-semibold">
          Description{" "}
          <span className="text-[#9ca3af] text-xs ml-1">optional</span>
        </label>
        <textarea
          name="description"
          id="description"
          placeholder="Enter Description"
          defaultValue={
            selectedExperienceEntry && editingExperienceEntry
              ? jobDescription
              : ""
          }
          className="p-2.5 bg-[#f3f4f6] text-xs lg:text-sm placeholder:font-semibold border-2 border-transparent rounded-xl focus:border-[#3b83f6] focus:outline-0"
          ref={jobDescriptionRef}
          onChange={() => setFormTouched((prev) => !prev)}
        ></textarea>
      </div>
      <div className="mt-3.5 px-1 flex flex-col gap-y-3 text-xs sm:text-[13.3333px] font-bold">
        <button
          type="button"
          className={`w-fit py-2 px-4 flex items-center gap-x-1.5 rounded-sm text-[grey] border-1 border-[grey] ${
            editingExperienceEntry ? "cursor-pointer" : "cursor-not-allowed"
          }`}
          onClick={handleDeleteEntry}
        >
          <FaTrash />
          <span>Delete</span>
        </button>
        <div className="flex gap-x-3">
          <button
            type="button"
            className="py-2 px-4 rounded-sm text-[grey] border-1 border-[grey] cursor-pointer"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={clsx(
              "py-2 px-4 bg-[#187ff5] text-white rounded-sm",
              (companyNameRef.current?.value &&
                positionTitleRef.current?.value &&
                startDateRef.current?.value &&
                endDateRef.current?.value &&
                locationRef.current?.value &&
                jobDescriptionRef.current?.value) ||
                isFormValid
                ? "cursor-pointer"
                : "cursor-not-allowed"
            )}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExperienceForm;

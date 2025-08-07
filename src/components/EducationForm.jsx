import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

function EducationForm({
  setIsEducationFormOpen,
  setEducationDetails,
  selectedEducationEntry,
  setSelectedEducationEntry,
  editingEducationEntry,
  setEditingEducationEntry,
  setIsResumeCleared,
}) {
  const {
    id = "",
    startDate = "",
    endDate = "",
    location = "",
    institutionName = "",
    qualification = "",
  } = selectedEducationEntry || {};

  const [formTouched, setFormTouched] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const checkValid = () =>
      institutionNameRef.current?.value &&
      qualificationRef.current?.value &&
      startDateRef.current?.value &&
      endDateRef.current?.value &&
      locationRef.current?.value;

    setIsFormValid(checkValid());
  }, [selectedEducationEntry]);

  const institutionNameRef = useRef(null);
  const qualificationRef = useRef(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const locationRef = useRef(null);

  const handleSaveEntry = (e) => {
    e.preventDefault();
    setIsResumeCleared(false);
    if (
      institutionNameRef.current.value &&
      qualificationRef.current.value &&
      startDateRef.current.value &&
      endDateRef.current.value &&
      locationRef.current.value
    ) {
      if (editingEducationEntry) {
        setEducationDetails((prev) =>
          prev.map((item) =>
            item.id === id
              ? {
                  ...item,
                  startDate: startDateRef.current.value,
                  endDate: endDateRef.current.value,
                  location: locationRef.current.value,
                  institutionName: institutionNameRef.current.value,
                  qualification: qualificationRef.current.value,
                }
              : item
          )
        );
        toast.success("Entry updated successfully!");
      } else {
        setEducationDetails((prev) => [
          ...prev,
          {
            id: uuidv4(),
            startDate: startDateRef.current.value,
            endDate: endDateRef.current.value,
            location: locationRef.current.value,
            institutionName: institutionNameRef.current.value,
            qualification: qualificationRef.current.value,
            hidden: false,
          },
        ]);
        toast.success("Entry added successfully!");
      }
      setIsEducationFormOpen(false);
      setEditingEducationEntry(false);
      setSelectedEducationEntry(null);
    } else {
      toast.warn("Oops! Make sure all fields are filled before saving.");
    }
  };

  const handleDeleteEntry = () => {
    if (editingEducationEntry) {
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
          setEducationDetails((prev) => prev.filter((item) => item.id !== id));
          setIsEducationFormOpen(false);
          setEditingEducationEntry(false);
          setSelectedEducationEntry(null);
          toast.error("The entry has been deleted!");
        }
      });
    } else {
      toast.info("Nothing to delete - this entry hasn’t been saved yet.");
    }
  };

  const handleCancel = () => {
    if (
      institutionNameRef.current?.value &&
      qualificationRef.current?.value &&
      startDateRef.current?.value &&
      endDateRef.current?.value &&
      locationRef.current?.value
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
          setIsEducationFormOpen(false);
          setEditingEducationEntry(false);
          setSelectedEducationEntry(null);
        }
      });
    } else {
      setIsEducationFormOpen(false);
      setEditingEducationEntry(false);
      setSelectedEducationEntry(null);
    }
  };

  return (
    <form className="p-4.5" onSubmit={handleSaveEntry}>
      <div className="mb-3 flex flex-col gap-y-1.5">
        <label htmlFor="university" className="text-sm sm:text-base font-semibold">
          Institution Name
        </label>
        <input
          type="text"
          name="university"
          id="university"
          placeholder="Enter School / University"
          maxLength={40}
          defaultValue={
            selectedEducationEntry && editingEducationEntry
              ? institutionName
              : ""
          }
          className="p-2.5 h-10 bg-[#f3f4f6] text-xs lg:text-sm placeholder:font-semibold border-2 border-transparent rounded-xl focus:border-[#3b83f6] focus:outline-0"
          ref={institutionNameRef}
          onChange={() => setFormTouched((prev) => !prev)}
        />
      </div>
      <div className="mb-3 flex flex-col gap-y-1.5">
        <label htmlFor="degree" className="text-sm sm:text-base font-semibold">
          Qualification
        </label>
        <input
          type="text"
          name="degree"
          id="degree"
          placeholder="Enter Degree / Field of Study"
          defaultValue={
            selectedEducationEntry && editingEducationEntry ? qualification : ""
          }
          className="p-2.5 h-10 bg-[#f3f4f6] text-xs lg:text-sm placeholder:font-semibold border-2 border-transparent rounded-xl focus:border-[#3b83f6] focus:outline-0"
          ref={qualificationRef}
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
            selectedEducationEntry && editingEducationEntry ? startDate : ""
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
            selectedEducationEntry && editingEducationEntry ? endDate : ""
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
            selectedEducationEntry && editingEducationEntry ? location : ""
          }
          className="p-2.5 h-10 bg-[#f3f4f6] text-xs lg:text-sm placeholder:font-semibold border-2 border-transparent rounded-xl focus:border-[#3b83f6] focus:outline-0"
          ref={locationRef}
          onChange={() => setFormTouched((prev) => !prev)}
        />
      </div>
      <div className="mt-3.5 px-1 flex flex-col gap-y-3 text-xs sm:text-[13.3333px] font-bold">
        <button
          type="button"
          className={`w-fit py-2 px-4 flex items-center gap-x-1.5 rounded-sm text-[grey] border-1 border-[grey] ${
            editingEducationEntry ? "cursor-pointer" : "cursor-not-allowed"
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
              (institutionNameRef.current?.value &&
                qualificationRef.current?.value &&
                startDateRef.current?.value &&
                endDateRef.current?.value &&
                locationRef.current?.value) ||
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

export default EducationForm;

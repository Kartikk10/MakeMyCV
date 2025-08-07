import React from "react";

function PersonalDetailsForm({
  personalDetails,
  setPersonalDetails,
  setIsResumeCleared,
}) {
  const {
    name = "",
    phoneNumber = "",
    email = "",
    address = "",
  } = personalDetails;

  return (
    <form
      className="w-full p-4.5 bg-white rounded-xl"
      style={{
        boxShadow:
          "0 13px 27px -5px rgba(50, 50, 93, .1), 0 8px 16px -8px rgba(0, 0, 0, .25)",
      }}
    >
      <h2 className="mb-3.5 text-lg sm:text-2xl font-bold">Personal Details</h2>
      <div className="mb-3 flex flex-col gap-y-1.5">
        <label htmlFor="fullName" className="text-sm sm:text-base font-semibold">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="First and Last Name"
          className="p-2.5 h-10 bg-[#f3f4f6] text-xs lg:text-sm placeholder:font-semibold border-2 border-transparent rounded-xl focus:border-[#3b83f6] focus:outline-0"
          value={name}
          onChange={(e) => {
            setPersonalDetails((prev) => ({ ...prev, name: e.target.value }));
            setIsResumeCleared(false);
          }}
        />
      </div>
      <div className="mb-3 flex flex-col gap-y-1.5">
        <label htmlFor="email" className="text-sm sm:text-base font-semibold">
          Email <span className="text-[#9ca3af] text-xs ml-1">recommended</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          className="p-2.5 h-10 bg-[#f3f4f6] text-xs lg:text-sm placeholder:font-semibold border-2 border-transparent rounded-xl focus:border-[#3b83f6] focus:outline-0"
          value={email}
          onChange={(e) => {
            setPersonalDetails((prev) => ({ ...prev, email: e.target.value }));
            setIsResumeCleared(false);
          }}
        />
      </div>
      <div className="mb-3 flex flex-col gap-y-1.5">
        <label htmlFor="phoneNumber" className="text-sm sm:text-base font-semibold">
          Phone Number{" "}
          <span className="text-[#9ca3af] text-xs ml-1">recommended</span>
        </label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Enter Phone Number"
          className="p-2.5 h-10 bg-[#f3f4f6] text-xs lg:text-sm placeholder:font-semibold border-2 border-transparent rounded-xl focus:border-[#3b83f6] focus:outline-0"
          value={phoneNumber}
          onChange={(e) => {
            setPersonalDetails((prev) => ({ ...prev, phoneNumber: e.target.value }));
            setIsResumeCleared(false);
          }}
        />
      </div>
      <div className="flex flex-col gap-y-1.5">
        <label htmlFor="address" className="text-sm sm:text-base font-semibold">
          Address{" "}
          <span className="text-[#9ca3af] text-xs ml-1">recommended</span>
        </label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="City, Country"
          className="p-2.5 h-10 bg-[#f3f4f6] text-xs lg:text-sm placeholder:font-semibold border-2 border-transparent rounded-xl focus:border-[#3b83f6] focus:outline-0"
          value={address}
          onChange={(e) => {
            setPersonalDetails((prev) => ({ ...prev, address: e.target.value }));
            setIsResumeCleared(false);
          }}
        />
      </div>
    </form>
  );
}

export default PersonalDetailsForm;

import { v4 as uuidv4 } from "uuid";

export const dummyPersonalDetails = {
  name: "Rohan Verma",
  email: "rohan.verma@email.in",
  phoneNumber: "+91 10203 04050",
  address: "Bengaluru, India",
};

export const dummyEducationDetails = [
  {
    id: uuidv4(),
    startDate: "07/2019",
    endDate: "06/2023",
    location: "Mumbai, India",
    institutionName: "NovaTech University",
    qualification: "Bachelor of Computer Applications",
    hidden: false,
  },
  {
    id: uuidv4(),
    startDate: "04/2017",
    endDate: "03/2019",
    location: "Bengaluru, India",
    institutionName: "National Public School",
    qualification: "Senior Secondary Education(PCM)",
    hidden: true,
  },
];

export const dummyExperienceDetails = [
  {
    id: uuidv4(),
    startDate: "07/2023",
    endDate: "present",
    location: "Bengaluru, India",
    companyName: "PixelWave Pvt. Ltd.",
    positionTitle: "Frontend Developer",
    jobDescription:
      "Developed responsive web applications using React.js and Tailwind CSS. Collaborated with UX designers to build reusable UI components.",
    hidden: false,
  },
  {
    id: uuidv4(),
    startDate: "01/2022",
    endDate: "06/2022",
    location: "Remote",
    companyName: "CodeNest Solutions",
    positionTitle: "Web Development Intern",
    jobDescription:
      "Built landing pages and admin dashboards as part of the internship program. Gained hands-on experience with APIs and Git workflows.",
    hidden: false,
  },
];

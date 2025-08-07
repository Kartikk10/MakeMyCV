import { useEffect, useRef, useState } from "react";
import NavigationPanel from "./components/NavigationPanel";
import DownloadPDFButton from "./components/DownloadPDFButton";
import ContentSection from "./components/ContentSection";
import CustomizeSection from "./components/CustomizeSection";
import UtilityBar from "./components/UtilityBar";
import ResumePreview from "./components/ResumePreview";
import { getTextColorFromAccent } from "./utils/colorUtils";
import { dummyPersonalDetails } from "./utils/dummyUserData";
import { dummyEducationDetails } from "./utils/dummyUserData";
import { dummyExperienceDetails } from "./utils/dummyUserData";
import { shouldUseExpandedLayout } from "./utils/LayoutUtils";
import clsx from "clsx";
import { ToastContainer } from "react-toastify";

function App() {
  const [activeTab, setActiveTab] = useState("contentTab");
  const [selectedLayout, setSelectedLayout] = useState("top");
  const [accentColor, setAccentColor] = useState("#003a66");
  const [selectedFont, setSelectedFont] = useState("sans-serif");
  const textColor = getTextColorFromAccent(accentColor);
  const [personalDetails, setPersonalDetails] = useState(dummyPersonalDetails);
  const [isEducationFormOpen, setIsEducationFormOpen] = useState(false);
  const [isExperienceFormOpen, setIsExperienceFormOpen] = useState(false);
  const [educationDetails, setEducationDetails] = useState(
    dummyEducationDetails
  );
  const [experienceDetails, setExperienceDetails] = useState(
    dummyExperienceDetails
  );
  const useExpandedLayout = shouldUseExpandedLayout(
    educationDetails,
    experienceDetails
  );
  const [isResumeCleared, setIsResumeCleared] = useState(false);
  const resumePreviewRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={clsx(
        "w-full max-w-[1500px] min-h-[1122px] m-auto py-8 px-0 md:px-6 flex gap-x-6 flex-col gap-y-10 md:flex-row",
        isEducationFormOpen
          ? "md:min-h-[1184.92px]"
          : isExperienceFormOpen
          ? "md:min-h-[1394.92px]"
          : "md:min-h-[1184.92px]"
      )}
    >
      <div
        className="max-[450px]:w-full min-[450px]:w-4/5 sm:w-2/3 mx-auto md:w-1/3 xl:w-full h-auto md:min-h-full px-6 md:px-0 flex gap-x-6 gap-y-6 flex-col xl:flex-row"
        style={
          useExpandedLayout && activeTab === "contentTab"
            ? { flexDirection: "column" }
            : {}
        }
      >
        <div className="flex flex-col gap-y-6">
          <NavigationPanel activeTab={activeTab} onTabChange={setActiveTab} />
          <DownloadPDFButton
            isResumeCleared={isResumeCleared}
            resumePreviewRef={resumePreviewRef}
            selectedLayout={selectedLayout}
          />
        </div>
        <div className="w-full flex flex-col gap-y-7 relative z-0">
          <UtilityBar
            dummyPersonalDetails={dummyPersonalDetails}
            dummyEducationDetails={dummyEducationDetails}
            dummyExperienceDetails={dummyExperienceDetails}
            personalDetails={personalDetails}
            educationDetails={educationDetails}
            experienceDetails={experienceDetails}
            setPersonalDetails={setPersonalDetails}
            setEducationDetails={setEducationDetails}
            setExperienceDetails={setExperienceDetails}
            isResumeCleared={isResumeCleared}
            setIsResumeCleared={setIsResumeCleared}
          />
          {activeTab === "contentTab" && (
            <ContentSection
              personalDetails={personalDetails}
              setPersonalDetails={setPersonalDetails}
              isEducationFormOpen={isEducationFormOpen}
              setIsEducationFormOpen={setIsEducationFormOpen}
              isExperienceFormOpen={isExperienceFormOpen}
              setIsExperienceFormOpen={setIsExperienceFormOpen}
              educationDetails={educationDetails}
              setEducationDetails={setEducationDetails}
              experienceDetails={experienceDetails}
              setExperienceDetails={setExperienceDetails}
              setIsResumeCleared={setIsResumeCleared}
            />
          )}
          {activeTab === "customizeTab" && (
            <CustomizeSection
              setSelectedLayout={setSelectedLayout}
              accentColor={accentColor}
              onAccentColorChange={setAccentColor}
              selectedFont={selectedFont}
              onSelectedFontChange={setSelectedFont}
              textColor={textColor}
            />
          )}
        </div>
      </div>
      <div
        className="min-h-[1122px] md:min-h-full w-full md:w-2/3 px-3 md:px-0 "
        style={{
          boxShadow:
            "0 13px 27px -5px rgba(50, 50, 93, .1), 0 8px 16px -8px rgba(0, 0, 0, .25)",
        }}
      >
        <ResumePreview
          selectedLayout={selectedLayout}
          accentColor={accentColor}
          selectedFont={selectedFont}
          textColor={textColor}
          personalDetails={personalDetails}
          isEducationFormOpen={isEducationFormOpen}
          isExperienceFormOpen={isExperienceFormOpen}
          educationDetails={educationDetails}
          experienceDetails={experienceDetails}
          isResumeCleared={isResumeCleared}
          resumePreviewRef={resumePreviewRef}
          screenWidth={screenWidth}
        />
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
}

export default App;

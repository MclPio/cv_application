import { useState } from "react";
import "./styles/app.css";
import Experience from "./components/Experience";
import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import PersonalInfoInput from "./components/PersonalInfoInput";

function Resume() {
  const [resumeView, setResumeView] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    name: "Joe Smith",
    email: "joesmith@world.co",
    phone: "123-555-1241",
    location: "Toronto, Canada",
    url: "joesmith.community",
  });
  const [experience, setExperience] = useState({
    companyName: "intel",
    positionTitle: "hardware engineer",
    date: "2025",
    jobDescription: [
      "Engineered new cpus resulting in 500% increase in revenue",
      "Wired electric wires improving efficiency by 25%",
      "Ate 5 cupcakes from company cafeteria consistently achieving a 250% eating ratio compared to others",
    ],
  });

  function switchView() {
    setResumeView(!resumeView);
  }

  if (resumeView) {
    return (
      <div className="resume-view">
        <PersonalInfo {...personalInfo} />
        <Education />
        <Experience />
        <button onClick={switchView}>Edit</button>
      </div>
    );
  } else {
    return (
      <div className="resume-form">
        <PersonalInfoInput
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <button onClick={switchView}>Submit</button>
      </div>
    );
  }
}

export default function App() {
  return (
    <>
      <div className="container">
        <Resume />
      </div>
    </>
  );
}

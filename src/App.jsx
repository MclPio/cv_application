import { useState } from "react";
import "./styles/app.css";
import Experience from "./components/Experience";
import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import PersonalInfoInput from "./components/PersonalInfoInput";

function ExperienceInput({ experience, setExperience }) {
  function handleChange(e) {
    const newExperience = {
      ...experience,
      [e.target.name]: e.target.value,
    };
    setExperience(newExperience);
  }

  function handleItemsChange(e, index) {}

  const listJobItems = experience.jobDescription.map((item, index) => {
    return (
      <textarea
        key={item}
        type="text"
        name={index}
        value={item}
        onChange={handleChange}
      />
    );
  });

  return (
    <div className="experience-input">
      <label htmlFor="company-name">Company Name</label>
      <input
        type="text"
        id="company-name"
        name="companyName"
        value={experience.companyName}
        onChange={handleChange}
      />
      <label htmlFor="position-title">Company Name</label>
      <input
        type="text"
        id="position-title"
        name="positionTitle"
        value={experience.positionTitle}
        onChange={handleChange}
      />
      <label htmlFor="date">Date</label>
      <input
        type="text"
        id="date"
        name="date"
        value={experience.date}
        onChange={handleChange}
      />
      {/* well now what? need to design a dynamic form input? or just use a textbox? */}
      <label htmlFor="job-description">Job Description</label>
      {listJobItems}
    </div>
  );
}
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
        <Experience experience={experience} />
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
        <ExperienceInput
          experience={experience}
          setExperience={setExperience}
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

import { useState } from "react";
import "./styles/app.css";
import Experience from "./components/Experience";
import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import PersonalInfoInput from "./components/PersonalInfoInput";
import ExperienceParentInput from "./components/ExperienceInput";
import EducationInput from "./components/EducationInput";

function Resume() {
  const [resumeView, setResumeView] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: "Joe Smith",
    email: "joesmith@world.co",
    phone: "123-555-1241",
    location: "Toronto, Canada",
    url: "joesmith.community",
  });
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      companyName: "intel",
      positionTitle: "hardware engineer",
      date: "2025",
      jobDescription: [
        "Engineered new cpus resulting in 500% increase in revenue",
        "Wired electric wires improving efficiency by 25%",
        "Ate 5 cupcakes from company cafeteria consistently achieving a 250% eating ratio compared to others",
      ],
    },
  ]);
  const [education, setEducation] = useState([
    {
      id: 1,
      schoolName: "University of Toronto",
      titleOfStudy: "Economics",
      date: "2020",
    },
  ]);

  function addExperience() {
    setExperiences([
      ...experiences,
      {
        id: Date.now(),
        companyName: "",
        positionTitle: "",
        date: "",
        jobDescription: [],
      },
    ]);
  }

  function deleteExperience(id) {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  }

  function switchView() {
    setResumeView(!resumeView);
  }

  function updateEducation(id, updatedEducation) {
    setEducation(
      education.map((edu) =>
        edu.id === id ? { ...updatedEducation, id } : edu
      )
    );
  }

  function addEducation() {
    setEducation([
      ...education,
      {
        id: Date.now(),
        schoolName: "",
        titleOfStudy: "",
        date: "",
      },
    ]);
  }

  function deleteEducation(id) {
    setEducation(education.filter((edu) => edu.id !== id));
  }

  if (resumeView) {
    return (
      <div className="resume-view">
        <PersonalInfo {...personalInfo} />
        <h2>Experience</h2>
        {experiences.map((experience) => (
          <Experience key={experience.id} experience={experience} />
        ))}
        <Education education={education} />
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
        <ExperienceParentInput
          experiences={experiences}
          setExperiences={setExperiences}
          deleteExperience={deleteExperience}
          addExperience={addExperience}
        />
        <EducationInput
          education={education}
          setEducation={setEducation}
          deleteEducation={deleteEducation}
          addEducation={addEducation}
          updateEducation={updateEducation}
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

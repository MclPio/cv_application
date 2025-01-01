import { useState } from "react";
import "./styles/app.css";
import ResumeView from "./components/ResumeView";
import FormView from "./components/FormView";

function Resume() {
  const [resumeView, setResumeView] = useState(true);
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
      <>
        <ResumeView
          personalInfo={personalInfo}
          experiences={experiences}
          education={education}
        />
        <button onClick={switchView}>Edit</button>
      </>
    );
  } else {
    return (
      <>
        <FormView
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          experiences={experiences}
          setExperiences={setExperiences}
          deleteExperience={deleteExperience}
          addExperience={addExperience}
          education={education}
          setEducation={setEducation}
          deleteEducation={deleteEducation}
          addEducation={addEducation}
          updateEducation={updateEducation}
        />
        <button onClick={switchView}>Submit</button>
      </>
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

// todo:
// 1. Have one add job button, currently every job has the button
// 2. Style with DaisyUI

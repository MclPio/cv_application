import { useState } from "react";
import "./styles/app.css";
import Experience from "./components/Experience";
import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import PersonalInfoInput from "./components/PersonalInfoInput";

// JobDescriptionBullet -> JobDescriptionList -> ExperienceInput -> Resume

function JobDescriptionBullet({ string, onDescriptionChange, index }) {
  return (
    <textarea
      value={string}
      onChange={(e) => onDescriptionChange(index, e.target.value)}
    ></textarea>
  );
}

function JobDescriptionList({
  jobDescriptions,
  onDescriptionChange,
  onDeleteDescription,
}) {
  return jobDescriptions.map((description, index) => (
    <div key={index}>
      <JobDescriptionBullet
        string={description}
        index={index}
        onDescriptionChange={onDescriptionChange}
      />
      <button onClick={() => onDeleteDescription(index)}>×</button>
    </div>
  ));
}

function ExperienceInput({ experience, setExperience }) {
  function handleDeleteDescription(index) {
    const newJobDescription = experience.jobDescription.filter(
      (_, i) => i !== index
    );
    setExperience({
      ...experience,
      jobDescription: newJobDescription,
    });
  }

  function handleChange(e) {
    const newExperience = {
      ...experience,
      [e.target.name]: e.target.value,
    };
    setExperience(newExperience);
  }

  function handleDescriptionChange(index, newValue) {
    const newJobDescription = [...experience.jobDescription];
    newJobDescription[index] = newValue;
    setExperience({
      ...experience,
      jobDescription: newJobDescription,
    });
  }

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
      <JobDescriptionList
        jobDescriptions={experience.jobDescription}
        onDescriptionChange={handleDescriptionChange}
        onDeleteDescription={handleDeleteDescription}
      />
      <button
        onClick={() =>
          setExperience({
            ...experience,
            jobDescription: [...experience.jobDescription, ""],
          })
        }
      >
        Add Description
      </button>
    </div>
  );
}

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

  function updateExperience(id, updatedExperience) {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...updatedExperience, id } : exp
      )
    );
  }

  function deleteExperience(id) {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  }

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

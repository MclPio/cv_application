import { useState } from "react";
import "./styles/app.css";
import Experience from "./components/Experience";
import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import PersonalInfoInput from "./components/PersonalInfoInput";
import ExperienceInput from "./components/ExperienceInput";

function EducationItem({ education, setEducation, deleteEducation }) {
  function handleChange(e) {
    const newEducation = {
      ...education,
      [e.target.name]: e.target.value,
    };
    setEducation(newEducation);
  }

  return (
    <div className="education-item">
      <label htmlFor="school-name">School Name</label>
      <input
        type="text"
        id="school-name"
        name="schoolName"
        value={education.schoolName}
        onChange={handleChange}
      />
      <label htmlFor="title-of-study">Program</label>
      <input
        type="text"
        id="title-of-study"
        name="titleOfStudy"
        value={education.titleOfStudy}
        onChange={handleChange}
      />
      <label htmlFor="date">Date</label>
      <input
        type="text"
        id="date"
        name="date"
        value={education.date}
        onChange={handleChange}
      />
      <button onClick={() => deleteEducation(education.id)}>×</button>
    </div>
  );
}

function EducationInput({
  education,
  setEducation,
  deleteEducation,
  addEducation,
  updateEducation,
}) {
  return (
    <>
      <h3>Education</h3>
      <div> form inputs or something</div>
      {education.map((edu) => (
        <div key={edu.id}>
          <EducationItem
            education={edu}
            setEducation={(updatedEducation) =>
              updateEducation(edu.id, updatedEducation)
            }
            deleteEducation={deleteEducation}
          />
        </div>
      ))}
      <button onClick={addEducation}>Add Another Study</button>
    </>
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
        {experiences.map((experience) => (
          <div key={experience.id}>
            <ExperienceInput
              experience={experience}
              setExperience={(updatedExperience) =>
                updateExperience(experience.id, updatedExperience)
              }
            />
            {experiences.length > 1 && (
              <button
                onClick={() => deleteExperience(experience.id)}
                className="absolute top-0 right-0 px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete Job
              </button>
            )}
            <button onClick={addExperience}>Add Another Job</button>
          </div>
        ))}

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

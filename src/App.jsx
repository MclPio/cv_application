import { useState } from "react";
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
      <div className="min-h-screen bg-base-200 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <ResumeView
                personalInfo={personalInfo}
                experiences={experiences}
                education={education}
              />
              <div className="card-actions justify-end mt-6">
                <button 
                  className="btn btn-primary" 
                  onClick={switchView}
                >
                  Edit Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen bg-base-200 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">Edit Your Resume</h2>
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
              <div className="card-actions justify-end mt-6">
                <button 
                  className="btn btn-primary" 
                  onClick={switchView}
                >
                  Save Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="container mx-auto px-4">
        <Resume />
      </div>
    </div>
  );
}
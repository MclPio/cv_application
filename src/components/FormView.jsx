import PersonalInfoInput from "./PersonalInfoInput";
import ExperienceParentInput from "./ExperienceInput";
import EducationInput from "./EducationInput";

export default function FormView({
  personalInfo,
  setPersonalInfo,
  experiences,
  setExperiences,
  deleteExperience,
  addExperience,
  education,
  setEducation,
  deleteEducation,
  addEducation,
  updateEducation,
}) {
  return (
    <div className="space-y-8">
      <div className="card bg-base-100 shadow-sm hover:shadow transition-all duration-300">
        <div className="card-body">
          <h2 className="card-title text-xl mb-4">Personal Information</h2>
          <PersonalInfoInput
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
        </div>
      </div>

      <div className="card bg-base-100 shadow-sm hover:shadow transition-all duration-300">
        <div className="card-body">
          <div className="flex justify-between items-center mb-4">
            <h2 className="card-title text-xl">Experience</h2>
            <button 
              onClick={addExperience}
              className="btn btn-primary btn-sm"
            >
              Add Experience
            </button>
          </div>
          <ExperienceParentInput
            experiences={experiences}
            setExperiences={setExperiences}
            deleteExperience={deleteExperience}
            addExperience={addExperience}
          />
        </div>
      </div>

      <div className="card bg-base-100 shadow-sm hover:shadow transition-all duration-300">
        <div className="card-body">
          <div className="flex justify-between items-center mb-4">
            <h2 className="card-title text-xl">Education</h2>
            <button 
              onClick={addEducation}
              className="btn btn-primary btn-sm"
            >
              Add Education
            </button>
          </div>
          <EducationInput
            education={education}
            setEducation={setEducation}
            deleteEducation={deleteEducation}
            addEducation={addEducation}
            updateEducation={updateEducation}
          />
        </div>
      </div>
    </div>
  );
}
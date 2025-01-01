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
    </div>
  );
}

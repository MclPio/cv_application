import Experience from "./Experience";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";

export default function ResumeView({ personalInfo, experiences, education }) {
  return (
    <div className="resume-view">
      <PersonalInfo {...personalInfo} />
      <h2>Experience</h2>
      {experiences.map((experience) => (
        <Experience key={experience.id} experience={experience} />
      ))}
      <Education education={education} />
    </div>
  );
}

import Experience from "./Experience";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";

export default function ResumeView({ personalInfo, experiences, education }) {
  return (
    <div className="space-y-8">
      <div className="border-b border-base-300 pb-6">
        <PersonalInfo {...personalInfo} />
      </div>
      
      <div className="space-y-6">
        <div className="divider text-xl font-semibold">Experience</div>
        <div className="space-y-6">
          {experiences.map((experience) => (
            <Experience key={experience.id} experience={experience} />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="divider text-xl font-semibold">Education</div>
        <Education education={education} />
      </div>
    </div>
  );
}
function ExperienceInfo({ experience }) {
  const jobResponsibilities = experience.jobDescription.map((item) => (
    <li key={item}>{item}</li>
  ));

  return (
    <>
      <div className="experience-info">
        <div className="experience-info-details">
          <div className="experience-info-left">
            <div>{experience.companyName}</div>
            <div>{experience.positionTitle}</div>
          </div>
          <div>{experience.date}</div>
        </div>
        <div>
          Job Responsibilities
          <ul>{jobResponsibilities}</ul>
        </div>
      </div>
    </>
  );
}

export default function Experience({ experience }) {
  return (
    <>
      <div className="experience">
        <ExperienceInfo experience={experience} />
      </div>
    </>
  );
}

function ExperienceInfo() {
  return (
    <>
      <div className="experience-info">
        <div className="experience-info-details">
          <div className="experience-info-left">
            <div>Company Name</div>
            <div>Position Title</div>
          </div>
          <div>Date</div>
        </div>
        <div>
          Job Responsibilities
          <ul>
            <li>point 1</li>
            <li>point 2</li>
            <li>point 3</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default function Experience() {
  // company name, position title, main responsibilities of your jobs,
  // date from and until when you worked for that company

  return (
    <>
      <h2>Experience</h2>
      <div className="experience">
        <ExperienceInfo />
      </div>
    </>
  );
}

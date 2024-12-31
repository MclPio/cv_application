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

export default function ExperienceInput({ experience, setExperience }) {
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
      <label htmlFor="position-title">Position Title</label>
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

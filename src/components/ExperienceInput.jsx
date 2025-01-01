function JobDescriptionBullet({ string, onDescriptionChange, index }) {
  return (
    <textarea
      value={string}
      onChange={(e) => onDescriptionChange(index, e.target.value)}
      id={`job-description-${index}`}
    ></textarea>
  );
}

function JobDescriptionList({
  jobDescriptions,
  onDescriptionChange,
  onDeleteDescription,
}) {
  return (
    <>
      <p>Job Description</p>
      {jobDescriptions.map((description, index) => (
        <div key={index}>
          <JobDescriptionBullet
            string={description}
            index={index}
            onDescriptionChange={onDescriptionChange}
          />
          <button onClick={() => onDeleteDescription(index)}>×</button>
        </div>
      ))}
    </>
  );
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
      <h3>Experience</h3>
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

export default function ExperienceParentInput({
  experiences,
  setExperiences,
  addExperience,
  deleteExperience,
}) {
  function updateExperience(id, updatedExperience) {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...updatedExperience, id } : exp
      )
    );
  }

  return (
    <>
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
    </>
  );
}

function JobDescriptionBullet({ string, onDescriptionChange, index, id }) {
  return (
    <div className="form-control w-full">
      <textarea
        value={string}
        onChange={(e) => onDescriptionChange(index, e.target.value)}
        id={`job-description-${id}-${index}`}
        className="textarea textarea-bordered h-24 w-full"
      ></textarea>
    </div>
  );
}

function JobDescriptionList({
  jobDescriptions,
  onDescriptionChange,
  onDeleteDescription,
  id,
}) {
  return (
    <div className="space-y-4">
      <h4 className="font-medium text-base">Job Description</h4>
      {jobDescriptions.map((description, index) => (
        <div key={index} className="flex gap-2 items-start">
          <JobDescriptionBullet
            string={description}
            index={index}
            onDescriptionChange={onDescriptionChange}
            id={id}
          />
          <button 
            onClick={() => onDeleteDescription(index)}
            className="btn btn-circle btn-sm btn-ghost"
          >
            ×
          </button>
        </div>
      ))}
    </div>
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
    <div className="card bg-base-200 shadow-sm p-6 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="form-control w-full">
          <label className="label" htmlFor={`company-name-${experience.id}`}>
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            id={`company-name-${experience.id}`}
            name="companyName"
            value={experience.companyName}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label" htmlFor={`position-title-${experience.id}`}>
            <span className="label-text">Position Title</span>
          </label>
          <input
            type="text"
            id={`position-title-${experience.id}`}
            name="positionTitle"
            value={experience.positionTitle}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label" htmlFor={`date-${experience.id}`}>
            <span className="label-text">Date</span>
          </label>
          <input
            type="text"
            id={`date-${experience.id}`}
            name="date"
            value={experience.date}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
      </div>

      <JobDescriptionList
        jobDescriptions={experience.jobDescription}
        onDescriptionChange={handleDescriptionChange}
        onDeleteDescription={handleDeleteDescription}
        id={experience.id}
      />
      
      <div className="mt-4">
        <button
          onClick={() =>
            setExperience({
              ...experience,
              jobDescription: [...experience.jobDescription, ""],
            })
          }
          className="btn btn-outline btn-sm"
        >
          Add Description
        </button>
      </div>
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
    <div className="space-y-4">
      {experiences.map((experience) => (
        <div key={experience.id} className="relative">
          <ExperienceInput
            experience={experience}
            setExperience={(updatedExperience) =>
              updateExperience(experience.id, updatedExperience)
            }
          />
          {experiences.length > 1 && (
            <button
              onClick={() => deleteExperience(experience.id)}
              className="btn btn-error btn-sm absolute top-2 right-2"
            >
              Delete Job
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
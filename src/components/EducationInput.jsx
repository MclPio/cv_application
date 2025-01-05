function EducationItem({ education, setEducation, deleteEducation }) {
  function handleChange(e) {
    const newEducation = {
      ...education,
      [e.target.name]: e.target.value,
    };
    setEducation(newEducation);
  }

  return (
    <div className="card bg-base-200 shadow-sm p-4 mb-4 relative">
      <button 
        onClick={() => deleteEducation(education.id)}
        className="btn btn-circle btn-sm btn-ghost absolute top-2 right-2"
      >
        ×
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control w-full">
          <label className="label" htmlFor={`school-name-${education.id}`}>
            <span className="label-text">School Name</span>
          </label>
          <input
            type="text"
            id={`school-name-${education.id}`}
            name="schoolName"
            value={education.schoolName}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label" htmlFor={`title-of-study-${education.id}`}>
            <span className="label-text">Program</span>
          </label>
          <input
            type="text"
            id={`title-of-study-${education.id}`}
            name="titleOfStudy"
            value={education.titleOfStudy}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label" htmlFor={`education-date-${education.id}`}>
            <span className="label-text">Date</span>
          </label>
          <input
            type="text"
            id={`education-date-${education.id}`}
            name="date"
            value={education.date}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default function EducationInput({
  education,
  setEducation,
  deleteEducation,
  addEducation,
  updateEducation,
}) {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.id}>
            <EducationItem
              education={edu}
              setEducation={(updatedEducation) =>
                updateEducation(edu.id, updatedEducation)
              }
              deleteEducation={deleteEducation}
            />
          </div>
        ))}
      </div>
      <button 
        onClick={addEducation}
        className="btn btn-outline btn-primary btn-sm"
      >
        Add Another Study
      </button>
    </div>
  );
}
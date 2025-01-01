function EducationItem({ education, setEducation, deleteEducation }) {
  function handleChange(e) {
    const newEducation = {
      ...education,
      [e.target.name]: e.target.value,
    };
    setEducation(newEducation);
  }

  return (
    <div className="education-item">
      <label htmlFor={`school-name-${education.id}`}>School Name</label>
      <input
        type="text"
        id={`school-name-${education.id}`}
        name="schoolName"
        value={education.schoolName}
        onChange={handleChange}
      />
      <label htmlFor={`title-of-study-${education.id}`}>Program</label>
      <input
        type="text"
        id={`title-of-study-${education.id}`}
        name="titleOfStudy"
        value={education.titleOfStudy}
        onChange={handleChange}
      />
      <label htmlFor={`education-date-${education.id}`}>Date</label>
      <input
        type="text"
        id={`education-date-${education.id}`}
        name="date"
        value={education.date}
        onChange={handleChange}
      />
      <button onClick={() => deleteEducation(education.id)}>×</button>
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
    <>
      <h3>Education</h3>
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
      <button onClick={addEducation}>Add Another Study</button>
    </>
  );
}

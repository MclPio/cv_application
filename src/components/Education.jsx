function School({ education }) {
  return (
    <>
      {education.map((edu) => (
        <div className="school" key={edu.id}>
          <div className="school-left">
            <div>
              <b>{edu.schoolName}</b>
            </div>
            <div>{edu.titleOfStudy}</div>
          </div>
          <div>{edu.date}</div>
        </div>
      ))}
    </>
  );
}

export default function Education({ education }) {
  return (
    <>
      <h2>Education</h2>
      <div className="education">
        <School education={education} />
      </div>
    </>
  );
}

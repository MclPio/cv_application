function School() {
  return (
    <>
      <div className="school">
        <div className="school-left">
          <div>
            <b>school name</b>
          </div>
          <div>title of study</div>
        </div>
        <div>date of study</div>
      </div>
    </>
  );
}

export default function Education() {
  return (
    <>
      <h2>Education</h2>
      <div className="education">
        <School />
      </div>
    </>
  );
}

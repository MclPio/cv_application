import { useState } from "react";

export default function EducationForm() {
  const [educationInput, setEducationInput] = useState({
    school: "",
    titleOfStudy: "",
    dateOfStudy: "",
  });

  return (
    <>
      <fieldset className="education-info">
        <legend>Education</legend>
        <label htmlFor="school">school</label>
        <input
          type="text"
          id="school"
          value={educationInput.contactName}
          onChange={(e) =>
            setEducationInput({
              ...educationInput,
              school: e.target.value,
            })
          }
        />

        <label htmlFor="titleOfStudy">program</label>
        <input
          type="text"
          id="titleOfStudy"
          value={educationInput.titleOfStudy}
          onChange={(e) =>
            setEducationInput({
              ...educationInput,
              titleOfStudy: e.target.value,
            })
          }
        />

        <label htmlFor="dateOfStudy">graduation year</label>
        <input
          type="date"
          id="dateOfStudy"
          value={educationInput.dateOfStudy}
          onChange={(e) =>
            setEducationInput({
              ...educationInput,
              dateOfStudy: e.target.value,
            })
          }
        />
      </fieldset>
    </>
  );
}

import { useState } from "react";
import Contact from "./components/Contact";
import "./styles/app.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Form from "./components/Form";

export default function App() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@world.co");
  const [phone, setPhone] = useState("123-123-1234");

  const [school, setSchool] = useState("University of Toronto");
  const [titleOfStudy, setTitleOfStudy] = useState("Finance");
  const [dateOfStudy, setDateOfStudy] = useState("2015");

  const [companyName, setCompanyName] = useState("AMD");
  const [positionTitle, setPositionTitle] = useState("Hardware Engineer");
  const [description, setDescription] = useState(
    "Manged development of future tech chips and what not..."
  );
  const [startDate, setStartDate] = useState("2020");
  const [endDate, setEndDate] = useState("present");

  return (
    <>
      <div className="container">
        <div className="resume">
          <Contact name={name} email={email} phone={phone} />
          <Education
            school={school}
            titleOfStudy={titleOfStudy}
            dateOfStudy={dateOfStudy}
          ></Education>
          <Experience
            companyName={companyName}
            positionTitle={positionTitle}
            description={description}
            startDate={startDate}
            endDate={endDate}
          ></Experience>
        </div>
        <Form
          onUpdateResume={(name, email, phone) => {
            setName(name);
            setEmail(email);
            setPhone(phone);
          }}
        ></Form>
      </div>
    </>
  );
}

// edit button should display on hover over resume section
// FORM VIEW would be hidden until a user clicks a button to edit

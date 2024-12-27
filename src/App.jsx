import { useState } from "react";
import "./styles/app.css";
import Experience from "./components/Experience";
import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";

function PersonalInfoInput({ name, email, phone, location, url }) {
  return (
    <div className="personal-info-input">
      <label htmlFor="fullname">Name</label>
      <input type="text" id="fullname" name="fullname" defaultValue={name} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" defaultValue={email} />

      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone" name="phone" defaultValue={phone} />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        name="location"
        defaultValue={location}
      />

      <label htmlFor="url">URL</label>
      <input type="url" id="url" name="url" defaultValue={url} />
    </div>
  );
}

function Resume() {
  const [resumeView, setResumeView] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    name: "Joe Smith",
    email: "joesmith@world.co",
    phone: "123-555-1241",
    location: "Toronto, Canada",
    url: "joesmith.community",
  });

  function switchView() {
    setResumeView(!resumeView);
  }

  if (resumeView) {
    return (
      <div className="resume-view">
        <PersonalInfo {...personalInfo} />
        <Education />
        <Experience />
        <button onClick={switchView}>Edit</button>
      </div>
    );
  } else {
    return (
      <div className="resume-form">
        <PersonalInfoInput {...personalInfo} />
        <button onClick={switchView}>Submit</button>
      </div>
    );
  }
}

export default function App() {
  return (
    <>
      <div className="container">
        <Resume />
      </div>
    </>
  );
}

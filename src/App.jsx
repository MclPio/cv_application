import { useState } from "react";
import "./styles/app.css";

function PersonalInfo() {
  return (
    <>
      <div className="personal-info">
        <h1>name</h1>
        <div className="personal-info-details">
          <div>email</div>
          <div>phone number</div>
          <div>location</div>
          <div>url</div>
        </div>
      </div>
    </>
  );
}

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

function Education() {
  return (
    <>
      <h2>Education</h2>
      <div className="education">
        <School />
      </div>
    </>
  );
}

function ExperienceInfo() {
  return (
    <>
      <div className="experience-info">
        <div className="experience-info-details">
          <div className="experience-info-left">
            <div>Company Name</div>
            <div>Position Title</div>
          </div>
          <div>Date</div>
        </div>
        <div>
          Job Responsibilities
          <ul>
            <li>point 1</li>
            <li>point 2</li>
            <li>point 3</li>
          </ul>
        </div>
      </div>
    </>
  );
}

function Experience() {
  // company name, position title, main responsibilities of your jobs,
  // date from and until when you worked for that company

  return (
    <>
      <h2>Experience</h2>
      <div className="experience">
        <ExperienceInfo />
      </div>
    </>
  );
}

function Resume() {
  return (
    <div className="resume">
      <PersonalInfo />
      <Education />
      <Experience />
    </div>
  );
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

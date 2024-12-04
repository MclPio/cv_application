import { useState } from "react";
import Contact from "./components/Contact";
import "./styles/app.css";
import ContactForm from "./components/ContactForm";

export default function App() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@world.co");
  const [phone, setPhone] = useState("123-123-1234");

  return (
    <>
      <div className="container">
        <div className="left-side">
          FORM VIEW
          <ContactForm name={name} email={email} phone={phone} />
        </div>
        <div className="right-side">
          RESUME VIEW
          <div className="resume">
            <Contact name={name} email={email} phone={phone} />
          </div>
        </div>
      </div>
    </>
  );
}

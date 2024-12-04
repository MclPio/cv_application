import "../styles/contact-form.css";
import { useState } from "react";

export default function ContactForm() {
  const [contactInput, setContactInput] = useState({
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });

  function updateContact() {
    console.log("hi");
  }
  return (
    <>
      <form className="contact-form">
        <label htmlFor="name">name</label>
        <input type="text" id="name" />
        <label htmlFor="email">email</label>
        <input type="email" id="email" />
        <label htmlFor="phone">phone</label>
        <input type="tel" id="phone" />
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Submit
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Edit
        </button>
      </form>
    </>
  );
}

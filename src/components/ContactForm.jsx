import "../styles/contact-form.css";
import { useState } from "react";

export default function ContactForm({ onUpdateResume }) {
  const [contactInput, setContactInput] = useState({
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateResume(
      contactInput.contactName,
      contactInput.contactEmail,
      contactInput.contactPhone
    );
  }
  return (
    <>
      <form className="contact-form">
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          value={contactInput.contactName}
          onChange={(e) =>
            setContactInput({ ...contactInput, contactName: e.target.value })
          }
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          value={contactInput.contactEmail}
          onChange={(e) =>
            setContactInput({ ...contactInput, contactEmail: e.target.value })
          }
        />
        <label htmlFor="phone">phone</label>
        <input
          type="tel"
          id="phone"
          value={contactInput.contactPhone}
          onChange={(e) =>
            setContactInput({ ...contactInput, contactPhone: e.target.value })
          }
        />
        <button
          onClick={(e) => {
            handleSubmit(e);
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

import { useState, useRef } from "react";

export default function Form({ onUpdateResume }) {
  const [contactInput, setContactInput] = useState({
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });

  const dialogRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateResume(
      contactInput.contactName,
      contactInput.contactEmail,
      contactInput.contactPhone
    );
    dialogRef.current?.close();
  }

  function openDialog() {
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  return (
    <>
      <dialog ref={dialogRef}>
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
          <button onClick={closeDialog} type="button">
            Cancel
          </button>
        </form>
      </dialog>
      <button onClick={openDialog}>Edit</button>
    </>
  );
}

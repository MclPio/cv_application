export default function Contact({ name, email, phone }) {
  return (
    <>
      <div id="contact-items">
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </>
  );
}

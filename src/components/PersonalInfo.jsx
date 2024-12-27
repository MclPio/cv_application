export default function PersonalInfo({ name, email, phone, location, url }) {
  return (
    <>
      <div className="personal-info">
        <h1>{name}</h1>
        <div className="personal-info-details">
          <div>{email}</div>
          <div>{phone}</div>
          <div>{location}</div>
          <div>{url}</div>
        </div>
      </div>
    </>
  );
}

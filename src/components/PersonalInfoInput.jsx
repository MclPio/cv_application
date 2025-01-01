export default function PersonalInfoInput({ personalInfo, setPersonalInfo }) {
  function handleChange(e) {
    const newPersonalInfo = {
      ...personalInfo,
      [e.target.name]: e.target.value,
    };
    setPersonalInfo(newPersonalInfo);
  }

  return (
    <div className="personal-info-input">
      <h3>Personal Info</h3>
      <label htmlFor="fullname">Name</label>
      <input
        type="text"
        id="fullname"
        name="name"
        value={personalInfo.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={personalInfo.email}
        onChange={handleChange}
      />

      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={personalInfo.phone}
        onChange={handleChange}
      />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        name="location"
        value={personalInfo.location}
        onChange={handleChange}
      />

      <label htmlFor="url">URL</label>
      <input
        type="url"
        id="url"
        name="url"
        value={personalInfo.url}
        onChange={handleChange}
      />
    </div>
  );
}

export default function PersonalInfoInput({ personalInfo, setPersonalInfo }) {
  function handleChange(e) {
    const newPersonalInfo = {
      ...personalInfo,
      [e.target.name]: e.target.value,
    };
    setPersonalInfo(newPersonalInfo);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="form-control w-full">
        <label className="label" htmlFor="fullname">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          id="fullname"
          name="name"
          value={personalInfo.name}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
      </div>

      <div className="form-control w-full">
        <label className="label" htmlFor="email">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={personalInfo.email}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
      </div>

      <div className="form-control w-full">
        <label className="label" htmlFor="phone">
          <span className="label-text">Phone</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={personalInfo.phone}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
      </div>

      <div className="form-control w-full">
        <label className="label" htmlFor="location">
          <span className="label-text">Location</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={personalInfo.location}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
      </div>

      <div className="form-control w-full md:col-span-2">
        <label className="label" htmlFor="url">
          <span className="label-text">URL</span>
        </label>
        <input
          type="url"
          id="url"
          name="url"
          value={personalInfo.url}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
      </div>
    </div>
  );
}
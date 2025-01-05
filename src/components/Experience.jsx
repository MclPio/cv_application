function ExperienceInfo({ experience }) {
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="card-body">
        <div className="flex justify-between items-center mb-4">
          <div className="space-y-1">
            <div className="text-xl font-bold capitalize">{experience.companyName}</div>
            <div className="text-base-content/70 capitalize">{experience.positionTitle}</div>
          </div>
          <div className="badge badge-primary badge-lg">{experience.date}</div>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Job Responsibilities</h3>
          <ul className="list-disc list-inside space-y-2 text-base-content/80">
            {experience.jobDescription.map((item) => (
              <li key={item} className="pl-2">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Experience({ experience }) {
  return (
    <div className="experience">
      <ExperienceInfo experience={experience} />
    </div>
  );
}
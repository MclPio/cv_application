function School({ education }) {
  return (
    <div className="space-y-4">
      {education.map((edu) => (
        <div key={edu.id} className="flex justify-between items-center py-2">
          <div className="space-y-1">
            <div className="font-bold text-lg">{edu.schoolName}</div>
            <div className="text-base-content/70">{edu.titleOfStudy}</div>
          </div>
          <div className="badge badge-lg">{edu.date}</div>
        </div>
      ))}
    </div>
  );
}

export default function Education({ education }) {
  return (
    <div className="space-y-4">
      <School education={education} />
    </div>
  );
}
const PasswordRequirements = ({
  labels
}: {
  labels: {
    title: string;
    minLength: string;
    uppercase: string;
    number: string;
  };
}) => (
  <div className="rounded-lg bg-amber-50 p-4">
    <p className="mb-2 text-sm text-gray-700">{labels.title}</p>
    <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
      <li>{labels.minLength}</li>
      <li>{labels.uppercase}</li>
      <li>{labels.number}</li>
    </ul>
  </div>
);

export default PasswordRequirements;

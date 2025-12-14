const OtpInstruction = ({ label }: { label: string }) => (
  <div className="mb-6 rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
    <p className="text-center text-sm text-gray-700 dark:text-gray-300">
      {label}
    </p>
  </div>
);

export default OtpInstruction;

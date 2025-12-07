const OtpInstructionBox = ({ instruction }: { instruction: string }) => (
  <div className="mb-6 rounded-lg bg-amber-50 p-4">
    <p className="text-center text-sm text-gray-700">{instruction}</p>
  </div>
);

export default OtpInstructionBox;

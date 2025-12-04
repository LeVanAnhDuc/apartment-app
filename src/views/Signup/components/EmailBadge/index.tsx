const EmailBadge = ({ email }: { email: string }) => (
  <div className="bg-muted inline-flex items-center gap-2 rounded-full px-4 py-2">
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs text-white">
      {email.charAt(0).toUpperCase()}
    </div>
    <span className="text-muted-foreground text-sm">{email}</span>
  </div>
);

export default EmailBadge;

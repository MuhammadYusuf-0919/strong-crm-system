export const statusColors = (status: string): string => {
  // Success statuslar
  const successStatus: string[] = [
    "paid",
    "active",
    // "meeting",
    "completed",
  ];

  // Warning statuslar
  const warningStatus: string[] = ["pending"];

  // Error statuslar
  const errorStatus: string[] = ["banned", "overdue", "cancelled", "not-connect"];

  // Info statuslar
  const infoStatus: string[] = ["published", "sent", "meeting", "Downloaded"];

  // Secondary statuslar
  const secondaryStatus: string[] = ["sent", "inactive", "rejected"];

  // Default status
  const defaultStatus: string[] = ["all", "draft", "no status yet", "refund"];

  // Statuslarni tekshirib va ulang
  if (successStatus.includes(status)) return "success";
  if (warningStatus.includes(status)) return "warning";
  if (errorStatus.includes(status)) return "error";
  if (infoStatus.includes(status)) return "info";
  if (secondaryStatus.includes(status)) return "secondary";
  if (defaultStatus.includes(status)) return "default";

  // Hali aniqlanmagan status uchun default
  return "default";
};

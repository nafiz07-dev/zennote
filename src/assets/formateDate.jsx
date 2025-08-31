export default function formatDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  // Format like "Wednesday, August 28, 2025, 9:07 AM"
  const formatted = date.toLocaleString("en-US", options);

  // Split into parts: "9:07 AM, Wednesday, August 28, 2025"
  const [time, dayDate] = formatted.split(", ", 2);
  return `${time.replace(" ", "")} • ${dayDate}`;
}

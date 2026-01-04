export function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return d.toLocaleDateString("en-US", options);
}

export function formatToYYYYMMDD(date) {
  if (!date) return "";
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

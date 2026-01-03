export function validateTitle(title) {
  if (!isNotEmpty(title)) return "Title is empty!";
  return null;
}

export function validateTime(time) {
  if (!isNotEmpty(time)) return "Time is empty!";
  return null;
}

export function validateDate(date) {
  if (!isNotEmpty(date)) return "Date is empty!";
  return null;
}

function isNotEmpty(value) {
  return (
    value !== undefined && value !== null && value.toString().trim() !== ""
  );
}

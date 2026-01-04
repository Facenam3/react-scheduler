export default function DaySelector({ days, selectedDate, setSelectedDate }) {
  return (
    <div className="flex gap-4 mb-6 justify-center items-center">
      {days.map((day) => (
        <div
          key={day.toDateString()}
          onClick={() => setSelectedDate(day)}
          className={`cursor-pointer p-4 w-32 rounded-xl shadow-lg text-center ${
            selectedDate.toDateString() === day.toDateString()
              ? "bg-purple-500 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          <p className="text-sm">
            {day.toLocaleDateString("en-US", { weekday: "short" })}
          </p>
          <p className="text-lg font-bold">{day.getDate()}</p>
          <p className="text-sm">
            {day.toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      ))}
    </div>
  );
}

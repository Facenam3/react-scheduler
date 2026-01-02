import { useState } from "react";
import Scheduler from "./Scheduler";

export default function DayPlanner() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => {
    const options = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options); // e.g., "Tue, 30 Dec 2025"
  };

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const days = [today, tomorrow];
  return (
    <div className="p-3">
      <h2 className="text-3xl font-extrabold text-purple-700 text-center mb-3">
        Your Scheduler
      </h2>
      <div className="p-3 max-w-2/4 mx-auto">
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

        <div className="p-3 flex gap-3">
          <Scheduler title={`Tasks for ${formatDate(selectedDate)}`} />
          <Scheduler done title={`Done for ${formatDate(selectedDate)}`} />
        </div>
      </div>
    </div>
  );
}

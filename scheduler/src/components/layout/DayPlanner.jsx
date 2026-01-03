import { useContext, useState } from "react";
import Scheduler from "./Scheduler";
import TaskContext from "../../store/TaskContext";

export default function DayPlanner() {
  const taskCtx = useContext(TaskContext);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => {
    const options = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const days = [today, tomorrow];

  const formatToYYYYMMDD = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const taskForSelectedDay = taskCtx.tasks.filter(
    (task) => formatToYYYYMMDD(task.date) === formatToYYYYMMDD(selectedDate)
  );

  const toDoTasks = taskForSelectedDay.filter((task) => !task.isComplete);
  const doneTasks = taskForSelectedDay.filter((task) => task.isComplete);

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
          <Scheduler
            title={`Tasks for ${formatDate(selectedDate)}`}
            toDoTasks={toDoTasks}
          />
          <Scheduler
            done
            title={`Done for ${formatDate(selectedDate)}`}
            doneTasks={doneTasks}
          />
        </div>
      </div>
    </div>
  );
}

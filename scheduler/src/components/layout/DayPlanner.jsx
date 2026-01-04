import { useContext, useState, useEffect } from "react";
import Scheduler from "./Scheduler.jsx";
import TaskContext from "../../store/TaskContext";
import DaySelector from "../UI/DaySelector.jsx";
import { formatToYYYYMMDD, formatDate } from "../../utils/date.js";

export default function DayPlanner() {
  const taskCtx = useContext(TaskContext);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    taskCtx.setSelectedDate(selectedDate);
  }, [selectedDate, taskCtx]);

  const today = new Date();
  const daysToShow = 7;
  const days = [];

  for (let i = 0; i < daysToShow; i++) {
    const day = new Date(today);
    day.setDate(today.getDate() + i);
    days.push(day);
  }

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
        <DaySelector
          days={days}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          className="flex gap-4 overflow-x-auto"
        />

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

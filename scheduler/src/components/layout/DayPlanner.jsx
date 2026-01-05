import { useContext, useState, useEffect } from "react";
import Scheduler from "./Scheduler.jsx";
import TaskContext from "../../store/TaskContext";
import DaySelector from "../UI/DaySelector.jsx";
import { formatToYYYYMMDD, formatDate } from "../../utils/date.js";

export default function DayPlanner() {
  const taskCtx = useContext(TaskContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [daysToShow, setDaysToShow] = useState(7);

  useEffect(() => {
    taskCtx.setSelectedDate(selectedDate);
  }, [selectedDate, taskCtx]);

  useEffect(() => {
    function updateDaysToShow() {
      const width = window.innerWidth;

      if (width < 640) {
        setDaysToShow(2);
      } else if (width < 1024) {
        setDaysToShow(5);
      } else {
        setDaysToShow(7);
      }
    }

    updateDaysToShow();
    window.addEventListener("resize", updateDaysToShow);

    return () => window.removeEventListener("resize", updateDaysToShow);
  }, []);

  const today = new Date();
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
    <div className="p-3 md:p-6 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-extrabold text-purple-700 text-center mb-3">
        Your Scheduler
      </h2>
      <div className="p-3 max-w-2xl mx-auto">
        <DaySelector
          days={days}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          className="flex gap-2 md:gap-4 overflow-x-auto snap-x snap-mandatory"
        />

        <div className="p-3 flex flex-col md:flex-row gap-3">
          <div className="flex-1 overflow-x-auto">
            <Scheduler
              title={`Tasks for ${formatDate(selectedDate)}`}
              toDoTasks={toDoTasks}
            />
          </div>
          <div className="flex-1 overflow-x-auto">
            <Scheduler
              done
              title={`Done for ${formatDate(selectedDate)}`}
              doneTasks={doneTasks}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

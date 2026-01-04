import { useContext } from "react";

import TaskContext from "../../store/TaskContext";

export default function Checkbox({ id, isComplete }) {
  const taskCtx = useContext(TaskContext);

  function handleCompleteTask() {
    taskCtx.completedTask(id);
  }

  return (
    <div
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 cursor-pointer 
        ${
          isComplete
            ? "bg-green-400 border-green-600"
            : "border-gray-400 bg-white flex"
        } `}
      onClick={handleCompleteTask}
    >
      <div className="w-2 h-2 rounded-full bg-white"></div>
    </div>
  );
}

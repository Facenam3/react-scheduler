import { createContext, useReducer } from "react";

const TaskContext = createContext({
  tasks: [],
  addTask: (task) => {},
  completedTask: (id) => {},
  updateTask: (id) => {},
  removeTask: (id) => {},
});

function taskReducer(state, action) {
  if (action.type === "ADD_TASK") {
    const updatedTasks = [...state.tasks];

    const id =
      state.tasks.length > 0 ? state.tasks[state.tasks.length - 1].id + 1 : 1;

    updatedTasks.push({ ...action.task, id, isComplete: false });

    return { ...state, tasks: updatedTasks };
  }

  if (action.type === "COMPLETED_TASK") {
    const existingTaskItemIndex = state.tasks.findIndex(
      (task) => task.id === action.id
    );
    const updatedTasks = [...state.tasks];
    const existingTaskItem = updatedTasks[existingTaskItemIndex];

    if (existingTaskItem) {
      const updatedTask = {
        ...existingTaskItem,
        isComplete: true,
      };

      updatedTasks[existingTaskItemIndex] = updatedTask;
    }

    return { ...state, tasks: updatedTasks };
  }

  if (action.type === "UPDATE_TASK") {
    const existingTaskItemIndex = state.tasks.findIndex(
      (task) => task.id === action.id
    );

    const updatedTask = {
      ...state.tasks[existingTaskItemIndex],
      ...action.task,
    };

    const updatedTasks = [...state.tasks];
    updatedTasks[existingTaskItemIndex] = updatedTask;

    return { ...state, tasks: updatedTasks };
  }

  if (action.type === "REMOVE_TASK") {
    const existingTaskItemIndex = state.tasks.findIndex(
      (task) => task.id === action.id
    );

    const updatedTasks = [...state.tasks];

    if (existingTaskItemIndex > -1) {
      updatedTasks.splice(existingTaskItemIndex, 1);
    }

    return { ...state, tasks: updatedTasks };
  }

  return state;
}

export function TaskContextProvider({ children }) {
  const [task, dispatchTaskAction] = useReducer(taskReducer, { tasks: [] });

  function addTask(task) {
    dispatchTaskAction({ type: "ADD_TASK", task });
  }

  function completedTask(id) {
    dispatchTaskAction({ type: "COMPLETED_TASK", id });
  }

  function removeTask(id) {
    dispatchTaskAction({ type: "REMOVE_TASK", id });
  }

  function updateTask(id) {
    dispatchTaskAction({ type: "UPDATE_TASK" }, id);
  }

  const taskContext = {
    tasks: task.tasks,
    addTask,
    completedTask,
    removeTask,
    updateTask,
  };

  console.log(taskContext);

  return (
    <TaskContext.Provider value={taskContext}>{children}</TaskContext.Provider>
  );
}

export default TaskContext;

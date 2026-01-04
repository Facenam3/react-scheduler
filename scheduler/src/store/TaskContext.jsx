import { createContext, useReducer } from "react";

const TaskContext = createContext({
  tasks: [],
  selectedDate: null,
  calendarDate: null,
  setSelectedDate: (date) => {},
  setCalendarDate: (date) => {},
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
    const updatedTasks = state.tasks.map((task) =>
      task.id === action.id ? { ...task, isComplete: !task.isComplete } : task
    );

    return { ...state, tasks: updatedTasks };
  }

  if (action.type === "UPDATE_TASK") {
    const existingTaskItemIndex = state.tasks.findIndex(
      (task) => task.id === action.id
    );

    if (existingTaskItemIndex === -1) return state;

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

  if (action.type === "SET_SELECTED_DATE") {
    return { ...state, selectedDate: action.date };
  }

  if (action.type === "SET_CALENDAR_DATE") {
    return { ...state, calendarDate: action.date };
  }

  return state;
}

export function TaskContextProvider({ children }) {
  const [task, dispatchTaskAction] = useReducer(taskReducer, {
    tasks: [],
    selectedDate: "",
    calendarDate: "",
  });

  function addTask(task) {
    dispatchTaskAction({ type: "ADD_TASK", task });
  }

  function completedTask(id) {
    dispatchTaskAction({ type: "COMPLETED_TASK", id });
  }

  function removeTask(id) {
    dispatchTaskAction({ type: "REMOVE_TASK", id });
  }

  function updateTask(id, task) {
    dispatchTaskAction({ type: "UPDATE_TASK", id: id, task });
  }

  function setSelectedDate(date) {
    dispatchTaskAction({ type: "SET_SELECTED_DATE", date });
  }

  function setCalendarDate(date) {
    dispatchTaskAction({ type: "SET_CALENDAR_DATE", date });
  }

  const taskContext = {
    tasks: task.tasks,
    selectedDate: task.selectedDate,
    calendarDate: task.calendarDate,
    addTask,
    completedTask,
    removeTask,
    updateTask,
    setSelectedDate,
    setCalendarDate,
  };

  console.log(taskContext);

  return (
    <TaskContext.Provider value={taskContext}>{children}</TaskContext.Provider>
  );
}

export default TaskContext;

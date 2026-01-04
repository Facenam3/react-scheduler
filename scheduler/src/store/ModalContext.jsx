import { createContext, useReducer } from "react";

const ModalContext = createContext({
  type: null,
  taskId: null,
  openForm: () => {},
  viewTask: (id) => {},
  editTask: (id) => {},
  closeModal: () => {},
  openCalendar: () => {},
});

function modalReducer(state, action) {
  if (action.type === "OPEN_FORM") {
    return { type: "form", taskId: null };
  }

  if (action.type === "VIEW_TASK") {
    return { type: "view", taskId: action.id };
  }

  if (action.type === "EDIT_TASK") {
    return { type: "edit", taskId: action.id };
  }

  if (action.type === "CLOSE_MODAL") {
    return { type: null, taskId: null };
  }

  if (action.type === "OPEN_CALENDAR") {
    return { type: "calendar", taskId: null };
  }

  return state;
}

export function ModalContextProvider({ children }) {
  const [modalState, dispatchModalAction] = useReducer(modalReducer, {
    type: null,
    taskId: null,
  });

  function openForm() {
    dispatchModalAction({ type: "OPEN_FORM" });
  }

  function viewTask(id) {
    dispatchModalAction({ type: "VIEW_TASK", id });
  }

  function editTask(id) {
    dispatchModalAction({ type: "EDIT_TASK", id });
  }

  function closeModal() {
    dispatchModalAction({ type: "CLOSE_MODAL" });
  }

  function openCalendar() {
    dispatchModalAction({ type: "OPEN_CALENDAR" });
  }

  const modalContext = {
    type: modalState.type,
    taskId: modalState.taskId,
    openForm,
    viewTask,
    editTask,
    closeModal,
    openCalendar,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;

import { useContext } from "react";

import Modal from "../UI/Modal.jsx";
import TaskForm from "../UI/TaskForm.jsx";
import ModalContext from "../../store/ModalContext";
import TaskContext from "../../store/TaskContext.jsx";

export default function AddTaskForm() {
  const modalCtx = useContext(ModalContext);
  const taskCtx = useContext(TaskContext);

  function handleCloseForm() {
    modalCtx.closeModal();
  }

  function handleAddTask(data) {
    taskCtx.addTask(data);

    modalCtx.closeModal();
  }

  return (
    <Modal
      open={modalCtx.type === "form"}
      onClose={modalCtx.type === "form" ? handleCloseForm : null}
    >
      <TaskForm key="add-task-form" onSubmit={handleAddTask} />
    </Modal>
  );
}

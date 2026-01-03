import { useContext } from "react";

import Modal from "../UI/Modal.jsx";
import TaskForm from "../UI/TaskForm.jsx";
import ModalContext from "../../store/ModalContext";
import TaskContext from "../../store/TaskContext.jsx";

export default function EditTask() {
  const modalCtx = useContext(ModalContext);
  const taskCtx = useContext(TaskContext);

  const task = taskCtx.tasks.find((t) => t.id === modalCtx.taskId);

  function handleClose() {
    modalCtx.closeModal();
  }

  function handleEditTask(task) {
    taskCtx.updateTask(task.id, task);
    modalCtx.closeModal();
  }
  return (
    <Modal
      open={modalCtx.type === "edit" && modalCtx.taskId != null}
      onClose={modalCtx.type === "edit" ? handleClose : null}
    >
      <TaskForm
        key={`edit-${modalCtx.taskId}`}
        onSubmit={handleEditTask}
        editTask={task}
      />
    </Modal>
  );
}

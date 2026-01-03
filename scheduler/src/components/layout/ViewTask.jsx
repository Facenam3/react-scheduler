import { useContext } from "react";

import Modal from "../UI/Modal.jsx";
import Button from "../UI/Button.jsx";
import ModalContext from "../../store/ModalContext";
import TaskContext from "../../store/TaskContext";

export default function ViewTask() {
  const modalCtx = useContext(ModalContext);
  const taskCtx = useContext(TaskContext);

  const task = taskCtx.tasks.find((t) => t.id === modalCtx.taskId);

  function handleClose() {
    modalCtx.closeModal();
  }

  return (
    <Modal
      open={modalCtx.type === "view" && modalCtx.taskId != null}
      onClose={modalCtx.type === "view" ? handleClose : null}
    >
      {task ? (
        <div className="bg-blue-400 text-gray-50 p-4 rounded-xl">
          <p>Task id: {task.id}</p>
          <h2>Title: {task.title}</h2>
          <p>Date: {task.date}</p>
          <p>Time: {task.time}</p>
          <p>Description: {task.description}</p>
          <div className="flex items-center gap-2 mt-4">
            <Button onClick={() => modalCtx.editTask(task.id)}>Edit</Button>
            <Button
              onClick={() => {
                taskCtx.removeTask(task.id);
                modalCtx.closeModal();
              }}
            >
              Delete
            </Button>
            <Button onClick={handleClose}>Close</Button>
          </div>
        </div>
      ) : (
        <p>Loading task...</p>
      )}
    </Modal>
  );
}

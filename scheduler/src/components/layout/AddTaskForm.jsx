import { useContext } from "react";

import Modal from "../UI/Modal.jsx";
import TaskForm from "../UI/TaskForm.jsx";
import ModalContext from "../../store/ModalContext";

export default function AddTaskForm() {
  const modalCtx = useContext(ModalContext);

  return (
    <Modal open={modalCtx.type === "form"}>
      <TaskForm />
    </Modal>
  );
}

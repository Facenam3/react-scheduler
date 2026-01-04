import { useContext, useState } from "react";

import Modal from "../UI/Modal.jsx";
import ModalContext from "../../store/ModalContext";
import TaskContext from "../../store/TaskContext.jsx";
import Input from "../UI/Input.jsx";
import Button from "../UI/Button.jsx";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const modalCtx = useContext(ModalContext);
  const taskCtx = useContext(TaskContext);

  function handleCloseModal() {
    setSelectedDate(new Date().toISOString().split("T")[0]);
    modalCtx.closeModal();
  }

  return (
    <Modal
      open={modalCtx.type === "calendar"}
      onClose={modalCtx.type === "calendar" ? handleCloseModal : null}
    >
      <div className="bg-blue-500 p-3 rounded-xl">
        <form className="">
          <Input
            className="bg-amber-50 p-2 rounded-sm"
            type="date"
            label="Select your date!"
            min={new Date().toISOString().split("T")[0]}
            name="selectedDate"
            id="selectedDate"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          ></Input>
          <div className="flex gap-2 mt-3">
            <Button type="button" onClick={handleCloseModal}>
              Close
            </Button>
            <Button
              type="button"
              onClick={() => {
                taskCtx.setSelectedDate(selectedDate);
                modalCtx.openForm();
              }}
            >
              Select Date
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

import { useContext } from "react";
import Button from "./Button.jsx";
import ModalContext from "../../store/ModalContext.jsx";

export default function MenuBar({ isOpen, onClose }) {
  const modalCtx = useContext(ModalContext);

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-purple-500 shadow-lg">
      <ul className="flex flex-col justify-center items-center gap-2 p-3">
        <li>
          <Button
            onClick={() => {
              modalCtx.openForm();
              onClose();
            }}
          >
            Add Task
          </Button>
        </li>
        <li>
          <Button
            onClick={() => {
              modalCtx.openCalendar();
              onClose();
            }}
          >
            Calendar
          </Button>
        </li>
      </ul>
    </div>
  );
}

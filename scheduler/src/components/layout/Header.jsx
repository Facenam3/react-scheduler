import { useContext } from "react";

import Button from "../UI/Button.jsx";
import ModalContext from "../../store/ModalContext.jsx";

export default function Header() {
  const modalCtx = useContext(ModalContext);

  console.log(modalCtx);

  function handleAddTask() {
    modalCtx.openForm();
  }

  return (
    <header className="bg-blue-400 text-gray-100 p-3 mb-10 shadow-amber-200 shadow-xl">
      <div className="flex justify-between items-center container mx-auto">
        <a href="/">
          <i className="fa-regular fa-note-sticky mr-3"></i>
          <span className="text-2xl text-amber-200">Schedule Application</span>
        </a>
        <ul className="flex gap-2 items-center">
          <li>
            <Button onClick={handleAddTask}>Add Task</Button>
          </li>

          <li>
            <a href="#" className="text-xl">
              Calendar
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

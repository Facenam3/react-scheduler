import { useContext } from "react";

import Button from "../UI/Button.jsx";
import ModalContext from "../../store/ModalContext.jsx";

export default function Header({ onMenuToggle, isMenuOpen }) {
  const modalCtx = useContext(ModalContext);

  function handleAddTask() {
    modalCtx.openForm();
  }

  function handleOpenCalendar() {
    modalCtx.openCalendar();
  }

  return (
    <header className="bg-purple-400 text-gray-100 p-3 md:mb-10 shadow-amber-200 shadow-xl">
      <div className="flex md:flex-row justify-between items-center container mx-auto">
        <a href="/">
          <i className="fa-regular fa-note-sticky mr-2 text-lg md:text-xl"></i>
          <span className="text-xl md:text-2xl text-amber-200 font-semibold">
            Scheduler
          </span>
        </a>
        <ul className="hidden md:flex gap-2 items-center">
          <li className="w-full md:w-auto">
            <Button onClick={handleAddTask}>Add Task</Button>
          </li>
          <li className="w-full md:w-auto">
            <Button onClick={handleOpenCalendar}>Calendar</Button>
          </li>
        </ul>

        <Button
          className="md:hidden p-2 bg-purple-600 rounded"
          onClick={onMenuToggle}
        >
          {isMenuOpen ? (
            <i className="fa-solid fa-xmark text-white"></i>
          ) : (
            <i className="fa-solid fa-bars text-white"></i>
          )}
        </Button>
      </div>
    </header>
  );
}

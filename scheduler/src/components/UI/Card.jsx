import { useContext } from "react";

import Checkbox from "./Checkbox.jsx";
import Button from "./Button.jsx";
import ModalContext from "../../store/ModalContext.jsx";

export default function Card({
  id,
  title,
  time,
  date,
  description,
  isComplete,
}) {
  const modalCtx = useContext(ModalContext);

  function handleShowTask(id) {
    modalCtx.viewTask(id);
  }

  console.log(date);

  return (
    <div
      className={`bg-gray-50 rounded-xl p-3 shadow-2xl mb-3 border-l-4 flex items-center
      ${isComplete ? "border-amber-500" : "border-purple-500"}
    `}
    >
      <div className="flex flex-col w-5/6 p-3">
        <p>
          <span className="text-sm text-gray-500 mr-3">Time:</span>
          {time}
        </p>
        <h4>
          <span className="text-sm text-gray-500 mr-3">Title:</span>
          {title}
        </h4>
        <p>
          <span className="text-sm text-gray-500 mr-3">Description:</span>
          {description}
        </p>
      </div>
      <div className="w-1/6 flex flex-col items-center gap-2">
        <Button onClick={() => handleShowTask(id)}>show</Button>
        <Checkbox id={id} isComplete={isComplete} />
      </div>
    </div>
  );
}

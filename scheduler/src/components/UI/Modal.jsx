import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, ...props }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else if (dialog.current?.open) {
      dialog.current.close();
    }
  }, [open]);
  return createPortal(
    <dialog
      {...props}
      ref={dialog}
      className="mx-auto  backdrop:bg-black/40 mt-20 p-0 border-none rounded-xl"
    >
      <div className="bg-white rounded-xl shadow-2xl w-[90vw] max-w-md p-6">
        {children}
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}

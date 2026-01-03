import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, ...props }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog
      {...props}
      ref={dialog}
      className="mx-auto  backdrop:bg-black/40 mt-20 p-0 border-none rounded-xl"
      onClose={onClose}
    >
      <div className="bg-white rounded-xl shadow-2xl w-[90vw] max-w-md p-6">
        {children}
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}

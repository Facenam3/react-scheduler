import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, ...props }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
  }, [open]);
  return createPortal(
    <dialog {...props} ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

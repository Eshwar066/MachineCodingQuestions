import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   if (!isOpen) return;

  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (event.key === "Escape") {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    }
  }, [isOpen]);

  return (
    <div>
      <h1>React Portal Demo</h1>

      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen &&
        createPortal(
          <div
            style={{
              border: "1px solid black",
              width: "400px",
              //   height: "100px",
            }}
          >
            <div
              style={{
                background: "white",
                color: "black",
                padding: "24px",
              }}
            >
              <h5 id="modal-title">React Modal</h5>
              <p>This modal is rendered using a React Portal.</p>

              <button onClick={() => setIsOpen(false)}>Close</button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

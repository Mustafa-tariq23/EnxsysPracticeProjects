// src/components/Modal.tsx
import React, { ReactNode } from "react";
import "../CSS/main/MainContainer.css";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="close">
          <button onClick={onClose}>X</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

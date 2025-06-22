import React, { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const modalRoot = document.getElementById('modal-root');

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!modalRoot || !open) return null;

  const modalElement = (
    <div className="modal__backdrop" onClick={onClose}>
      <div className="modal__window" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );

  return createPortal(modalElement, modalRoot);
};

export default Modal; 
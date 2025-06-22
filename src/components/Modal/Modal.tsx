import React, { ReactNode } from "react";
import "./Modal.scss";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="modal__backdrop" onClick={onClose}>
      <div className="modal__window" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal; 
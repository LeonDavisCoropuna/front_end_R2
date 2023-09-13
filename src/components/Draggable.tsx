import React, { useState } from "react";
import Draggable from "react-draggable";

interface DraggableModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const DraggableModal: React.FC<DraggableModalProps> = ({ title, onClose, children }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragStop = () => {
    setIsDragging(false);
  };

  return (
    <Draggable
      handle=".modal-title" // Puedes cambiar esto para adaptarlo a tu diseño
      onStart={handleDragStart}
      onStop={handleDragStop}
    >
      <div className={`fixed flex items-center justify-center bg-slate-500 ${isDragging ? "dragging" : ""}`}>
        <div className="draggable-modal bg-slate-100 p-10">
          <div className="modal-title p-10">
            <span>{title}</span>
            <button onClick={onClose}>Cerrar</button>
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </Draggable>
  );
};

export default DraggableModal;

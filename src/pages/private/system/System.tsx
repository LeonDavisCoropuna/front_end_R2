import RouteNotFound from "../../../utils/RouteNotFound";
import { Route } from "react-router-dom";
import IndexDatos from "./datos/IndexDatos";
import Navigation from "../../../components/Navigation";
import DraggableModal from "../../../components/Draggable";
import { useState } from "react";
export default function System() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Navigation />
      {/*isModalOpen && (
        <DraggableModal title="Buenas" onClose={closeModal}  >
          <p>Contenido de la ventana emergente...</p>
        </DraggableModal>
      )*/}
      <RouteNotFound>
        <Route path="" element={<div>Welcome System</div>} />
        <Route path="datos/*" element={<IndexDatos />} />
      </RouteNotFound>
    </>
  );
}

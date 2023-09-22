import RouteNotFound from "@/utils/RouteNotFound";
import { Route } from "react-router-dom";
import IndexDatos from "./datos/IndexDatos";
import Navigation from "../../../components/Navigation";
import IndexProcesos from "./procesos/IndexProcesos";
export default function System() {
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
        <Route path="procesos/*" element={<IndexProcesos />} />
      </RouteNotFound>
    </>
  );
}

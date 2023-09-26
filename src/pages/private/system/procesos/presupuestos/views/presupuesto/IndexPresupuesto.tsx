import RouteNotFound from "@/utils/RouteNotFound";
import { Route } from "react-router-dom";
import PresupuestoDetalle from "./PresupuestoDetalle";
function Presupuestos() {

  return (
    <RouteNotFound>
      <Route path=':id' element={<PresupuestoDetalle />} />
    </RouteNotFound>
  );
}

export default Presupuestos;

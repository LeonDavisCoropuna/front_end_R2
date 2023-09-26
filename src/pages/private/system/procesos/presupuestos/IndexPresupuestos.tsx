import RouteNotFound from "@/utils/RouteNotFound";
import { Route } from "react-router-dom";
import Plantilla from "./views/plantilla/Plantilla";
import NuevoPresupuesto from "./views/nuevoPresupuesto/NuevoPresupuesto";
import PresupuestoDetalle from "./views/presupuesto/PresupuestoDetalle";
import Presupuesto from "./views/presupuesto/Presupuesto";

export default function IndexPresupuestos() {
  return (
    <RouteNotFound>
      <Route path="" element={<Presupuesto />} />
      <Route path=":id" element={<PresupuestoDetalle />} />
      <Route path="plantillas" element={<Plantilla />} />
      <Route path="nuevo" element={<NuevoPresupuesto />} /> 
    </RouteNotFound>
  );
}

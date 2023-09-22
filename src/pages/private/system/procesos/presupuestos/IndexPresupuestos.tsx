import RouteNotFound from "@/utils/RouteNotFound";
import { Route } from "react-router-dom";
import Presupuestos from "./presupuesto/Presupuestos";
import Plantilla from "./plantilla/Plantilla";
import NuevoPresupuesto from "./nuevoPresupuesto/NuevoPresupuesto";

export default function IndexPresupuestos() {
  return (
    <RouteNotFound>
      <Route path="" element={<Presupuestos /> } />
      <Route path="presupuestos" element={<Presupuestos />} />
      <Route path="plantillas" element={<Plantilla />} />
      <Route path="nuevo" element={<NuevoPresupuesto />} />

    </RouteNotFound>
  );
}

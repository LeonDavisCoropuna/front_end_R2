import RouteNotFound from "@/utils/RouteNotFound";
import { Route } from "react-router-dom";
import IndexPresupuestos from "./presupuestos/IndexPresupuestos";
export default function IndexProcesos() {
  return (
    <RouteNotFound>
      <Route path="" element={<div>Welcome Procesos </div>} />
      <Route path="presupuestos/*" element={<IndexPresupuestos />} />
    </RouteNotFound>
  );
}

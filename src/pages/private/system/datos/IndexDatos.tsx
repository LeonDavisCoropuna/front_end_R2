import RouteNotFound from "../../../../utils/RouteNotFound";
import { Route } from "react-router-dom";
import ArticulosIndex from "./articulos/ArticulosRoute";
import IndexCliente from "./clients/ClienteRoute";
export default function IndexDatos() {
  return (
    <>
      <RouteNotFound>
        <Route path="" element={<div>Datos Here</div>}></Route>
        <Route path="clientes/*" element={<IndexCliente />} />
        <Route path="articulos/*" element={<ArticulosIndex />} />
      </RouteNotFound>
    </>
  );
}

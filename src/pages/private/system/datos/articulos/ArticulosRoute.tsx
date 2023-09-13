import RouteNotFound from "@/utils/RouteNotFound";
import { Route } from 'react-router-dom';
import Articulos from "./Articulos"
import ArticuloDetail from "./ArticuloDetail"
function ArticulosIndex() {
  return (
    <RouteNotFound>
        <Route path='' element={<Articulos/>}/>
        <Route path=':id' element={<ArticuloDetail/>}/>
    </RouteNotFound>
  )
}

export default ArticulosIndex
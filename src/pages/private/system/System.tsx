import RouteNotFound from "@/utils/RouteNotFound";
import { Route } from "react-router-dom";
import Navigation from "../../../components/Navigation";
import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";

const IndexDatos = lazy(() => import("./datos/IndexDatos"));
const IndexProcesos = lazy(() => import("./procesos/IndexProcesos"));

export default function System() {
  const user = useSelector((state: AppStore) => state.user);
  return (
    <>
      <Navigation user={user} />
      <Suspense fallback={<div>...Wait</div>}>
        <RouteNotFound>
          <Route path="" element={<div>Welcome System</div>} />
          <Route path="datos/*" element={<IndexDatos />} />
          <Route path="procesos/*" element={<IndexProcesos />} />
        </RouteNotFound>
      </Suspense>
    </>
  );
}

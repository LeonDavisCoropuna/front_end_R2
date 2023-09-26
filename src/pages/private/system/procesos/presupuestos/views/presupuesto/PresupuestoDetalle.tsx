import { PresupuestoProvider } from "../../context/PresupuestoContext";
import { useParams } from "react-router-dom";
import { PresupuestoDetail } from "./components/PresupuestoDetail";
function PresupuestoDetalle() {
  const { id } = useParams<{ id: string }>();
  return (
    <PresupuestoProvider>
      <PresupuestoDetail id={id} />
    </PresupuestoProvider>
  );
}

export default PresupuestoDetalle;

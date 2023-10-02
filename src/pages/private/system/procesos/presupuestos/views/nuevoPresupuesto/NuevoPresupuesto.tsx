import InformacionPresupuesto from "../../components/InformacionPresupuesto";
import TablePresupuesto from "../../components/TablePresupuesto";
import { PresupuestoProvider } from "../../context/PresupuestoContext";
import { ButtonSendFormulario } from "../../components/ButtonSendFormulairo";
import TitlePage from "@/components/TitlePage";
function NuevoPresupuesto() {
  return (
    <PresupuestoProvider>
      <div>
        <TitlePage title="Nuevo Presupuesto" />
      </div>
      <div className=" text-xs px-2 py-2 gap-2">
        <InformacionPresupuesto />
        <TablePresupuesto />
      </div>
      <div>
        <ButtonSendFormulario route="/procesos/presupuestos/nuevo"/>
      </div>
    </PresupuestoProvider>
  );
}
export default NuevoPresupuesto;

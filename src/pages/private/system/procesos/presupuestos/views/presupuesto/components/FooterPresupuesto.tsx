import { usePresupuesto } from "../../../context/PresupuestoContext";
export const FooterPresupuesto: React.FC<{}> = ({}) => {
  const { presupuesto } = usePresupuesto();
  const { nroOrden, estado } = presupuesto;
  return (
    <div className=" bottom-0 absolute w-full bg-slate-300">
      {nroOrden && <button>Imprimir</button>}
      {estado !== "Aceptado" && (
        <>
          <button className="p-2 hover:bg-blue-300 border-[0.1em] border-black w-28 m-2">Validar</button>
          <button className="p-2 hover:bg-blue-300 border-[0.1em] border-black w-28">Guardar</button>
        </>
      )}

    </div>
  );
};

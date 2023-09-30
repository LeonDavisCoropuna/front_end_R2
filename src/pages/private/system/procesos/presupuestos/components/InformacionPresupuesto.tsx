import React from "react";
import { usePresupuesto } from "../context/PresupuestoContext";

function InformacionPresupuesto() {
  const { presupuesto, setPresupuesto } = usePresupuesto();

  const handleChangePresupuesto = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPresupuesto((prevState) => ({
      ...prevState, // Copiamos todas las propiedades del estado anterior
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangePresupuestoFecha = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newDate = new Date(e.target.value);
    setPresupuesto({ ...presupuesto, [e.target.name]: newDate });
  };

  return (
    <div className="flex">
      <div className="flex gap-3">
        <table className="">
          <tbody>
            <tr className="">
              <td className="">Numero: </td>
              <td>
                <input
                  placeholder="nro"
                  name="numero"
                  className=" border-gray-500 pl-1 border-[0.1em] rounded-md w-24"
                  onChange={handleChangePresupuesto}
                  value={presupuesto.idN}
                />
              </td>
            </tr>
            <tr className="">
              <td className="">Estado:</td>
              <td>
                <select
                  className="w-24 border-gray-500 pl-1 border-[0.1em] rounded-md"
                  name="estado"
                  onChange={handleChangePresupuesto}
                  value={presupuesto.estado}
                >
                  <option>En curso</option>
                  <option>Aceptado</option>
                  <option>Anulado</option>
                </select>
              </td>
            </tr>
            <tr className="">
              <td className="">Forma de pago:</td>
              <td className="">
                <select
                  className=" w-24 border-gray-500 pl-1 border-[0.1em]  rounded-md"
                  name="formaPago"
                  onChange={handleChangePresupuesto}
                  value={presupuesto.formaPago}
                >
                  <option>50% Contado,50% Entrega</option>
                  <option>60% Contado,40% Entrega</option>
                  <option>Credito 45 dias</option>
                  <option>Credito 15 dias</option>
                  <option>Credito 35 dias</option>
                  <option>Credito 50 dias</option>
                </select>
              </td>
            </tr>
            <tr className="">
              <td className="">Refrencia:</td>
              <td>
                <input
                  className="w-24 border-gray-500 pl-1 border-[0.1em]  rounded-md"
                  name="referencia"
                  placeholder="ref"
                  onChange={handleChangePresupuesto}
                  value={presupuesto.referencia}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table className="">
          <tbody>
            <tr className="">
              <td>Fecha</td>
              <td>
                <input
                  type="date"
                  className="border-gray-500 pl-1 border-[0.1em] w-24  rounded-md"
                  name="fechaCreacion"
                  onChange={handleChangePresupuestoFecha}
                  value={presupuesto.fechaCreacion.toISOString().split("T")[0]}
                />
              </td>
            </tr>
            <tr className="">
              <td>Validez</td>
              <td>
                <input
                  type="date"
                  className="border-gray-500 pl-1 border-[0.1em] w-24 rounded-md"
                  name="fechaValidez"
                  onChange={handleChangePresupuestoFecha}
                  value={presupuesto.fechaValidez.toISOString().split("T")[0]}
                />
              </td>
            </tr>
            <tr className="">
              <td className="">Precio</td>
              <td className="flex items-center h-full w-full font-semibold">
                <input
                  type="checkbox"
                  className="my-auto"
                  name="precio"
                  onChange={handleChangePresupuesto}
                  value={presupuesto.precio ? "true" : "false"}
                />
                Establecido
              </td>
            </tr>
            <tr className="">
              <td className="font-semibold">Tipo</td>
              <td>
                <select
                  className="w-24 border-gray-500 pl-1 border-[0.1em]  rounded-md"
                  name="tipo"
                  onChange={handleChangePresupuesto}
                  value={presupuesto.tipo}
                >
                  <option>Estantar </option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex gap-3 ml-10">
        <table>
          <tbody>
            <tr>
              <td>Cliente</td>
              <td>
                <input
                  placeholder="cliente"
                  className=" border-gray-500 pl-1 border-[0.1em] rounded-md w-24"
                  name="cliente"
                  onChange={handleChangePresupuesto}
                  value={presupuesto.cliente}
                />
              </td>
            </tr>
            <tr>
              <td>Nombre</td>
              <td>
                <input
                  placeholder="nombre"
                  className=" border-gray-500 pl-1 border-[0.1em] rounded-md w-64"
                  name="nombre"
                  onChange={handleChangePresupuesto}
                  value={presupuesto.nombre}
                />
              </td>
            </tr>
            <tr>
              <td>Direccion</td>
              <td>
                <input
                  placeholder="direccion"
                  className=" border-gray-500 pl-1 border-[0.1em] rounded-md w-64"
                  name="direccion"
                  onChange={handleChangePresupuesto}
                  value={presupuesto.direccion}
                />
              </td>
            </tr>
            <tr>
              <td>Atencion</td>
              <td>
                <input
                  placeholder="atencion"
                  className=" border-gray-500 pl-1 border-[0.1em] rounded-md w-48 "
                  name="atencion"
                  onChange={handleChangePresupuesto}
                  value={presupuesto.atencion}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InformacionPresupuesto;

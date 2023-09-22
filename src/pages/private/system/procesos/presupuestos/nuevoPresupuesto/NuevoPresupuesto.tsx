import { useState } from "react";
import {
  EmptyPresupuesto,
  Presupuesto,
  Servicio,
} from "./nuevoPresupuesto.model";
import { AiFillPlusCircle } from "react-icons/ai";

function NuevoPresupuesto() {
  const [presupuesto, setPresupuesto] = useState<Presupuesto>(EmptyPresupuesto);

  const handleChangePresupuesto = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPresupuesto({
      ...presupuesto,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePresupuestoFecha = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newDate = new Date(e.target.value);
    setPresupuesto({ ...presupuesto, [e.target.name]: newDate });
  };

  const handleChangeServicio = (
    index: number,
    field: keyof Servicio,
    value: any
  ) => {
    const updatedServicio = [...presupuesto.servicio];
    updatedServicio[index] = {
      ...updatedServicio[index],
      [field]: value,
    };
    setPresupuesto({
      ...presupuesto,
      servicio: updatedServicio,
    });
  };
  const agregarServicio = (e: React.MouseEvent) => {
    e.preventDefault();
    const nuevoServicio: Servicio = {
      no: presupuesto.servicio.length + 1,
      codigo: "",
      descripcion: "",
      cantidad: 0,
      uMedida: "",
      pUnitario: 0,
      importe: 0,
    };

    // Clona el array existente y agrega el nuevo servicio
    const nuevosServicios = [...presupuesto.servicio, nuevoServicio];

    // Actualiza el estado del presupuesto con los nuevos servicios
    setPresupuesto({
      ...presupuesto,
      servicio: nuevosServicios,
    });
  };

  return (
    <div>
      <div>
        <h2 className="w-full p-1 pl-2 text-md bg-slate-300">
          Nuevo Presupuesto
        </h2>
      </div>
      <form className=" text-xs px-2 py-2 gap-2">
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
                      value={presupuesto.numero}
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
                      name="fecha"
                      onChange={handleChangePresupuestoFecha}
                      value={presupuesto.fecha.toISOString().split("T")[0]}
                    />
                  </td>
                </tr>
                <tr className="">
                  <td>Validez</td>
                  <td>
                    <input
                      type="date"
                      className="border-gray-500 pl-1 border-[0.1em] w-24 rounded-md"
                      name="validez"
                      onChange={handleChangePresupuestoFecha}
                      value={presupuesto.validez.toISOString().split("T")[0]}
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
        <div className=" mt-2">
          <div>
            <button onClick={agregarServicio}>
              {<AiFillPlusCircle size={30} />}
            </button>
          </div>
          <table className="table-auto w-full">
            <thead className="w-full">
              <tr className="">
                <th className="bg-blue-600 text-white resize-x overflow-auto border-[0.15em] w-11">
                  No
                </th>
                <th className="bg-blue-600 text-white resize-x overflow-auto border-[0.15em]">
                  Codigo
                </th>
                <th className="bg-blue-600 text-white resize-x overflow-auto border-[0.15em] w-64">
                  Descripcion
                </th>
                <th className="bg-blue-600 text-white resize-x overflow-auto border-[0.15em]">
                  Cantidad
                </th>
                <th className="bg-blue-600 text-white resize-x overflow-auto border-[0.15em]">
                  U Medida
                </th>
                <th className="bg-blue-600 text-white resize-x overflow-auto border-[0.15em]">
                  P. Unitario
                </th>
                <th className="bg-blue-600 text-white resize-x overflow-auto border-[0.15em]">
                  Importe
                </th>
              </tr>
            </thead>
            <tbody>
              {presupuesto.servicio.map((servicio, index) => (
                <tr key={index} className=" hover:bg-slate-100">
                  <td className=" border-[0.15em]">
                    <input
                      type="number"
                      value={servicio.no}
                      onChange={(e) =>
                        handleChangeServicio(index, "no", e.target.value)
                      }
                      className="w-11 bg-transparent"
                    />
                  </td>
                  <td className=" border-[0.15em]">
                    <input
                      type="number"
                      value={servicio.codigo}
                      onChange={(e) =>
                        handleChangeServicio(index, "codigo", e.target.value)
                      }
                      className="w-full bg-transparent"
                    />
                  </td>
                  <td className=" border-[0.15em]">
                    <textarea
                      rows={3}
                      value={servicio.descripcion}
                      onChange={(e) =>
                        handleChangeServicio(
                          index,
                          "descripcion",
                          e.target.value
                        )
                      }
                      className=" w-[50em] bg-transparent border-none outline-none"
                    />
                  </td>
                  <td className=" border-[0.15em]">
                    <input
                      type="number"
                      value={servicio.cantidad}
                      onChange={(e) =>
                        handleChangeServicio(index, "cantidad", e.target.value)
                      }
                      className="bg-transparent"
                    />
                  </td>
                  <td className=" border-[0.15em]">
                    <input
                      value={servicio.uMedida}
                      onChange={(e) =>
                        handleChangeServicio(index, "uMedida", e.target.value)
                      }
                      className="bg-transparent"
                    />
                  </td>
                  <td className=" border-[0.15em]">
                    <input
                      type="number"
                      value={servicio.pUnitario}
                      onChange={(e) =>
                        handleChangeServicio(index, "pUnitario", e.target.value)
                      }
                      className="bg-transparent"
                    />
                  </td>
                  <td className=" border-[0.15em] outline-none">
                    <input
                      type="number"
                      value={servicio.importe}
                      onChange={(e) =>
                        handleChangeServicio(index, "importe", e.target.value)
                      }
                      className="bg-transparent"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}

export default NuevoPresupuesto;

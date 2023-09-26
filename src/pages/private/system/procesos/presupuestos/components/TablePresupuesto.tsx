import React from "react";
import { usePresupuesto } from "../context/PresupuestoContext";
import { Servicio } from "../models/nuevoPresupuesto.model";
import { AiFillPlusCircle } from "react-icons/ai";
import TableService from "./TableService";

function TablePresupuesto() {
  const { presupuesto, setPresupuesto } = usePresupuesto();

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
  const handleDeleteService = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    const servicioCopia = [...presupuesto.servicio];
    servicioCopia.splice(index, 1);

    console.log(servicioCopia);
    const servicios = servicioCopia.map((servicios, index) => ({
      ...servicios,
      no: index + 1,
    }));
    setPresupuesto((prevState) => ({
      ...prevState, // Copiamos todas las propiedades del estado anterior
      servicio: servicios,
    }));
  };
  return (
    <div>
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
              <TableService
                servicio={servicio}
                index={index}
                handleDeleteService={handleDeleteService}
                key={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablePresupuesto;

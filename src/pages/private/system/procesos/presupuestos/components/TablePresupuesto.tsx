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
      idN: presupuesto.servicios.length + 1,
      codigo: "",
      descripcion: "",
      cantidad: 0,
      uMedida: "",
      pUnitario: 0,
      importe: 0,
      item: {
        pedido: "",
        cantidad: 0,
        costoTotal: 0,
        utilidad: 0,
        total: 0,
        materiales: [
          {
            idN: 0,
            articulo: "",
            cantidad: 0,
            cantidadEstimada: 0,
            unidadMedida: "",
            precioUnitario: 0,
            importe: 0,
            factor: 1,
            total: 0,
          },
        ],
        manoObra: {
          confeccion: [
            {
              descripcion: "",
              proceso: "",
              cantidadPorHora: 0,
              nroHoras: 0,
              nroPersonas: 0,
              importe: 0,
            },
          ],
          instalacion: [
            {
              descripcion: "",
              proceso: "",
              cantidadPorHora: 0,
              nroHoras: 0,
              nroPersonas: 0,
              importe: 0,
            },
          ],
          factor: 2.1,
          total: 0,
        },
        serviciosTerceros: [
          {
            servicioBrindado: "",
            proveedor: "",
            importe: 0,
            factor: 1,
            total: 0,
          },
        ],
        viaticos: [
          {
            descripcion: "",
            costo: 0,
            noPersonas: 0,
            noDias: 0,
            importe: 0,
            factor: 1,
            total: 0,
          },
        ],
        impresiones: [
          {
            campania: "",
            material: "",
            impresora: "",
            metrosHorizontal: 0,
            metrosVertical: 0,
            cantidad: 0,
            cantidadTotal: 0,
            precioM2: 0,
            importe: 0,
            minimo: 0,
            factor: 1,
            total: 0,
          },
        ],
      },
    };

    // Clona el array existente y agrega el nuevo servicio
    const nuevosServicios = [...presupuesto.servicios, nuevoServicio];

    // Actualiza el estado del presupuesto con los nuevos servicios
    setPresupuesto({
      ...presupuesto,
      servicios: nuevosServicios,
    });
  };
  const handleDeleteService = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    const servicioCopia = [...presupuesto.servicios];
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
            {presupuesto.servicios.map((servicio, index) => (
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

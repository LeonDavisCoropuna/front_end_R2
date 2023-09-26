import React from "react";
import { usePresupuesto } from "../context/PresupuestoContext";
import { Servicio } from "../models/nuevoPresupuesto.model";
import { AiOutlineDelete } from "react-icons/ai";

export const TableService: React.FC<{
  servicio: Servicio;
  index: number;
  handleDeleteService: (e: React.MouseEvent, index: number) => void; // Define la prop onDeleteService
}> = ({ servicio, index, handleDeleteService }) => {
  const { presupuesto, setPresupuesto } = usePresupuesto();
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
  return (
    <tr key={index} className=" hover:bg-slate-100">
      <td className=" border-[0.15em]">
        <input
          type="number"
          value={servicio.no}
          onChange={(e) => handleChangeServicio(index, "no", e.target.value)}
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
      <td className=" border-[0.15em] flex relative justify-between gap-2">
        <textarea
          rows={3}
          value={servicio.descripcion}
          onChange={(e) =>
            handleChangeServicio(index, "descripcion", e.target.value)
          }
          className=" w-[50em] bg-transparent border-none outline-none"
        />
        <button
          className="flex items-center"
          onClick={(e: React.MouseEvent) => handleDeleteService(e, index)}
        >
          <AiOutlineDelete size={20} />
        </button>
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
  );
};

export default TableService;

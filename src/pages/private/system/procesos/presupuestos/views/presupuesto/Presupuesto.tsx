import React, { useEffect, useRef, useState } from "react";

import axios from "@/config/axiosConfig";
import { EmptyProforma, Proforma } from "../../models/proformas.model";
import { useNavigate } from "react-router-dom";

export const HeadersTablePresupuesto: React.FC<{
  key: number;
  value: string;
}> = ({ key, value }) => {
  return (
    <th
      key={key}
      className={`border-[0.1em] py-1 px-2 bg-blue-600 text-sm font-normal whitespace-nowrap overflow-auto resize-x`}
    >
      {value}
    </th>
  );
};

export default function PresupuestoPage() {
  const ref = useRef(true);
  const navigation = useNavigate();
  const [info, setInfo] = useState<Proforma[]>([
    EmptyProforma,
    EmptyProforma,
    EmptyProforma,
    EmptyProforma,
    EmptyProforma,
    EmptyProforma,
    EmptyProforma,
    EmptyProforma,
    EmptyProforma,
    EmptyProforma,
    EmptyProforma,
    EmptyProforma,
    EmptyProforma,
    EmptyProforma,
    EmptyProforma,
    EmptyProforma,
  ]);

  const [selectedRow, setSelectedRow] = useState<number>(0);

  const headers = [
    { name: "Nro. PPTO", visible: true },
    { name: "Nro. Orden", visible: true },
    { name: "Cliente", visible: true },
    { name: "Fecha", visible: true },
    { name: "Aprobado Por", visible: true },
    { name: "Fecha Aprobacion", visible: true },
    { name: "Fecha Entrega", visible: true },
    { name: "Nro. Factura", visible: true },
    { name: "Estado", visible: true },
    { name: "Observacion", visible: true },
    { name: "Tipo Orden", visible: true },
    { name: "Status", visible: true },
    { name: "Creado", visible: true },
    { name: "Creado Por", visible: true },
    { name: "Actualizado", visible: true },
    { name: "Actualizado Por", visible: true },
    { name: "Fecha Termino", visible: true },
    { name: "Terminado Por", visible: true },
    { name: "Bitacora", visible: true },
    { name: "Validado Por", visible: true },
  ];
  const handleClickSelected = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setSelectedRow(index);
  };
  const handleClickFindPPTO = (e: React.MouseEvent) => {
    e.preventDefault();
    const ppto = info[selectedRow].nroPPTO
    navigation(`/system/procesos/presupuestos/${ppto}`);
  };
  useEffect(() => {
    const fetch = async () => {

      const res = await axios.get("/data/budget/all");
      console.log(res)
    }
    fetch()
  },[])
  return (
    <div className="mt-2 overflow-auto text-xs max-h-[42em] min-h-[42em] m-2">
      <button onClick={handleClickFindPPTO}>Buscar</button>
      <table className="">
        <thead className=" z-10 top-0">
          <tr className="bg-blue-600 text-white">
            {headers.map(
              (header, index) =>
                header.visible && (
                  <HeadersTablePresupuesto value={header.name} key={index} />
                )
            )}
          </tr>
        </thead>
        <tbody className="">
          {info.map((item, itemIndex) => (
            <tr
              key={itemIndex}
              className={`${
                itemIndex % 2 === 0 ? "bg-slate-100" : "bg-white"
              } hover:bg-slate-200 ${
                selectedRow === itemIndex ? "bg-slate-300" : ""
              }`}
              onClick={(e: React.MouseEvent) =>
                handleClickSelected(e, itemIndex)
              }
            >
              {Object.entries(item).map(([key, value], valueIndex) => {
                if (value instanceof Date) {
                  return (
                    <td key={valueIndex} className={`border-[0.1em]`}>
                      {value.toLocaleDateString()}
                    </td>
                  );
                } else {
                  // Establecer un ancho máximo y aplicar el estilo de recorte de texto
                  return (
                    <td
                      key={valueIndex}
                      className={`border-[0.1em] p-1 max-w-[30em] overflow-hidden whitespace-nowrap overflow-ellipsis`}
                    >
                      {value}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

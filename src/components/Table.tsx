import React, { useState } from "react";
import {AiFillDelete} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import axios from "@/config/axiosConfig"
interface Props {
  columns: string[];
  info: any[];
  route?: string;
  routeBack?:string;
}

export default function Table({ columns, info, route,routeBack }: Props) {
  const [sortedInfo, setSortedInfo] = useState([...info]);
  const [sortColumn, setSortColumn] = useState<string>(""); // Columna actualmente seleccionada
  const [selectedRow, setSelectedRow] = useState<number | null>(null); // Fila seleccionada
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc"); // Orden por defecto
  const navigate = useNavigate();
  const handleRowClick = (rowIndex: number, event: React.MouseEvent) => {
    event.preventDefault();
    setSelectedRow(rowIndex);
  };

  const handleClickSort = (column: string) => {
    let newSortDirection: "asc" | "desc" = "asc"; // Orden ascendente por defecto

    // Si la misma columna se hace clic nuevamente, cambia el orden
    if (column === sortColumn) {
      newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    }

    const sortedData = [...sortedInfo].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      // Verificar si los valores son cadenas antes de convertir a mayúsculas
      const nombreA =
        typeof valueA === "string"
          ? valueA.toUpperCase()
          : String(valueA).toUpperCase();
      const nombreB =
        typeof valueB === "string"
          ? valueB.toUpperCase()
          : String(valueB).toUpperCase();

      if (nombreA < nombreB) {
        return newSortDirection === "asc" ? -1 : 1;
      }
      if (nombreA > nombreB) {
        return newSortDirection === "asc" ? 1 : -1;
      }

      return 0;
    });

    setSortedInfo(sortedData);
    setSortColumn(column);
    setSortDirection(newSortDirection);
  };
  const handleEditClient = () => {
    if (selectedRow != null && route) {
      navigate(route + sortedInfo[selectedRow].idN);
    } else {
      console.log("Selecciona una ruta");
    }
  };
  const handleClickCreate = () => {
    navigate(route+"nuevo")
  }
  const handleDelete = async (index:number) => {
    const idItem = sortedInfo[index].idN;
    console.log(idItem)
    const res = await axios.delete(routeBack+idItem,idItem)
  }

  return (
    <div className="py-10 flex justify-start pl-3 pr-20 flex-col gap-3 text-white">
      <div>
        <button onClick={handleEditClient}>Editar</button>
        <button onClick={handleClickCreate}>Crear</button>

      </div>
      <table>
        <thead className="text-white bg-black">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="resize-x overflow-auto border-2 cursor-pointer"
              >
                <button
                  className="text-sm w-full h-full"
                  onClick={() => handleClickSort(column)}
                >
                  {column}
                </button>
              </th>
            ))}
            <th
              className="resize-x overflow-auto border-2 cursor-pointer"
            >
              <button className="text-sm w-full h-full">
                Opcion
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedInfo.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`hover:bg-[#4D648D] ${
                rowIndex === selectedRow ? "bg-[#4D648D] " : ""
              }`}
              onClick={(event) => handleRowClick(rowIndex, event)}
            >
              {columns.map((column, columnIndex) => (
                <td
                  key={columnIndex}
                  className="border-2 text-sm text-left px-2 overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[200px]"
                >
                  {row[column]}
                </td>
              ))}
              <td className="border-2 text-sm text-left px-2 overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[200px]">
                <button onClick={() => handleDelete(rowIndex)}><AiFillDelete /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

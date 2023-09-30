import React, { useState } from "react";
import { usePresupuesto } from "../context/PresupuestoContext";
import {
  Servicio,
  Item,
  Material,
  Viaticos,
  ServTerceros,
  Impresiones,
  ManoObraOpt,
} from "../models/nuevoPresupuesto.model";
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";
import { ButtonModalItem } from "./ButtonModalItem";

interface TableProps<T> {
  data: T[];
  headers: string[];
}

function renderTable<T extends { [key: string]: any }>(props: TableProps<T>) {
  const { data, headers } = props;

  return (
    <table className="w-full">
      <thead>
        <tr className="bg-blue-600 text-white h-6">
          {headers.map((header, index) => (
            <th key={index} className="border-[0.1em]">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, itemIndex) => (
          <tr key={itemIndex}>
            {Object.entries(item).map(([key, value], valueIndex) => {
              if (key !== "factor" && key !== "total") {
                return (
                  <td key={valueIndex} className="border-[0.1em]">
                    {value}
                  </td>
                );
              }
              return null; // No renderizar nada para "factor" y "total"
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export const ItemTableMateriales: React.FC<{ item: Item }> = ({ item }) => {
  const headers = [
    "Codigo",
    "Articulo",
    "Cantidad",
    "Cant Est",
    "U. Medida",
    "P. Unitario",
    "Importe",
  ];

  return renderTable<Material>({ data: item.materiales, headers });
};

export const ItemTableServicioTerceros: React.FC<{ item: Item }> = ({
  item,
}) => {
  const headers = ["Servicio", "Proveedor", "Importe"];

  return renderTable<ServTerceros>({ data: item.serviciosTerceros, headers });
};

export const ItemTableViaticos: React.FC<{ item: Item }> = ({ item }) => {
  const headers = ["Descripcion", "Costo", "No. Pers", "No. Dias", "Importe"];

  return renderTable<Viaticos>({ data: item.viaticos, headers });
};

export const ItemTableImpresiones: React.FC<{ item: Item }> = ({ item }) => {
  const headers = [
    "Campaña",
    "Material",
    "Impresora",
    "Horizontal mts",
    "Vertical Mts",
    "Cantidad",
    "Can. Total",
    "Precio M2",
    "importe",
    "Min",
  ];

  return renderTable<Impresiones>({ data: item.impresiones, headers });
};

export const ItemTableManoObra: React.FC<{ item: Item }> = ({ item }) => {
  const headers = [
    "Descripcion",
    "Proceso",
    "C. x Hora",
    "Nro. Peronas",
    "Nro. Horas",
    "Importe",
  ];
  return (
    <>
      <h2 className="font-semibold text-[1.1em]">Confeccion: </h2>
      {renderTable<ManoObraOpt>({ data: item.manoObra.confeccion, headers })}
      <h2 className="font-semibold text-[1.1em]">Instalacion: </h2>
      {renderTable<ManoObraOpt>({ data: item.manoObra.instalacion, headers })}
    </>
  );
};

export const DetailService: React.FC<{
  column: string;
  value: string | number;
  focus: boolean;
}> = ({ column, value, focus }) => {
  return (
    <td className="border-2 py-2 px-3">
      <div className="flex gap-2">
        <div>{column}:</div>
        <div
          className={`${
            focus ? "text-red-500" : "text-black"
          } border-[0.1em] border-black px-2`}
        >
          {value}
        </div>
      </div>
    </td>
  );
};

export const InputField: React.FC<{
  value: any;
  onChange: (value: any) => void;
}> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <td className="border-[0.15em] justify-center">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="w-full h-full bg-transparent pl-1 border-none outline-none"
      />
    </td>
  );
};

export const TableService: React.FC<{
  servicio: Servicio;
  index: number;
  handleDeleteService: (e: React.MouseEvent, index: number) => void; // Define la prop onDeleteService
}> = ({ servicio, index, handleDeleteService }) => {
  const [selectedAttribute, setSelectedAttribute] = useState<keyof Item | null>(
    "materiales"
  );

  const [isOpenModal, openModal, closeModal] = useModal();
  const { presupuesto, setPresupuesto } = usePresupuesto();
  const isEdit = presupuesto.idN ? true : false;
  const handleChangeServicio = (
    index: number,
    field: keyof Servicio,
    value: any
  ) => {
    const updatedServicio = [...presupuesto.servicios];
    updatedServicio[index] = {
      ...updatedServicio[index],
      [field]: value,
    };
    setPresupuesto({
      ...presupuesto,
      servicios: updatedServicio,
    });
  };

  const handleAttributeClick = (e: React.MouseEvent, attribute: keyof Item) => {
    e.preventDefault();
    setSelectedAttribute(attribute);
  };
  return (
    <>
      <tr key={index} className=" hover:bg-slate-100">
        <InputField
          value={servicio.idN}
          onChange={(value) => handleChangeServicio(index, "idN", value)}
        />
        <InputField
          value={servicio.codigo}
          onChange={(value) => handleChangeServicio(index, "codigo", value)}
        />
        <td className=" border-[0.15em] flex relative justify-between gap-2">
          <textarea
            rows={3}
            value={servicio.descripcion}
            onChange={(e) =>
              handleChangeServicio(index, "descripcion", e.target.value)
            }
            className=" w-[50em] bg-transparent border-none outline-none"
          />
          {!isEdit ? (
            <div
              className="flex items-center"
              onClick={(e: React.MouseEvent) => handleDeleteService(e, index)}
            >
              <AiOutlineDelete size={20} />
            </div>
          ) : (
            <button
              className="flex items-center"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                openModal();
              }}
            >
              <AiFillEdit size={20} />
            </button>
          )}
        </td>
        <InputField
          value={servicio.cantidad}
          onChange={(value) => handleChangeServicio(index, "cantidad", value)}
        />
        <InputField
          value={servicio.uMedida}
          onChange={(value) => handleChangeServicio(index, "uMedida", value)}
        />
        <InputField
          value={servicio.pUnitario}
          onChange={(value) => handleChangeServicio(index, "pUnitario", value)}
        />

        <InputField
          value={servicio.importe}
          onChange={(value) => handleChangeServicio(index, "importe", value)}
        />
      </tr>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h1>Presupuesto para el Item {servicio.idN}</h1>
        <div className="text-[1em] ">
          <table>
            <tbody className="gap-5">
              <tr>
                <DetailService
                  column="Pedido"
                  value={servicio.item.pedido}
                  focus={false}
                />
                <DetailService
                  column="Cantidad"
                  value={servicio.item.cantidad}
                  focus={false}
                />
                <DetailService
                  column="Costo Total"
                  value={servicio.item.costoTotal}
                  focus={true}
                />
                <DetailService
                  column="Utilidad%"
                  value={servicio.item.utilidad}
                  focus={false}
                />
                <DetailService
                  column="Total"
                  value={servicio.item.total}
                  focus={true}
                />
                <DetailService column="Plantilla" value="Opt" focus={false} />
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <th>
                  <ButtonModalItem
                    handleAttributeClick={handleAttributeClick}
                    name="Materiales"
                    value="materiales"
                    selectedAttribute={selectedAttribute}
                  />
                </th>
                <th>
                  <ButtonModalItem
                    handleAttributeClick={handleAttributeClick}
                    name="Mano de Obra"
                    value="manoObra"
                    selectedAttribute={selectedAttribute}
                  />
                </th>
                <th>
                  <ButtonModalItem
                    handleAttributeClick={handleAttributeClick}
                    name="Serv. Terceros"
                    value="serviciosTerceros"
                    selectedAttribute={selectedAttribute}
                  />
                </th>
                <th>
                  <ButtonModalItem
                    handleAttributeClick={handleAttributeClick}
                    name="Viaticos"
                    value="viaticos"
                    selectedAttribute={selectedAttribute}
                  />
                </th>
                <th>
                  <ButtonModalItem
                    handleAttributeClick={handleAttributeClick}
                    name="Impresiones"
                    value="impresiones"
                    selectedAttribute={selectedAttribute}
                  />
                </th>
              </tr>
            </tbody>
          </table>

          {selectedAttribute === "impresiones" && (
            <ItemTableImpresiones item={servicio.item} />
          )}
          {selectedAttribute === "materiales" && (
            <ItemTableMateriales item={servicio.item} />
          )}
          {selectedAttribute === "viaticos" && (
            <ItemTableViaticos item={servicio.item} />
          )}
          {selectedAttribute === "serviciosTerceros" && (
            <ItemTableServicioTerceros item={servicio.item} />
          )}
          {selectedAttribute === "manoObra" && (
            <ItemTableManoObra item={servicio.item} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default TableService;

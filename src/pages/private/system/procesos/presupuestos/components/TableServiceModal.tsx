import { usePresupuesto } from "../context/PresupuestoContext";
import {
  Servicio,
  Material,
  Viaticos,
  ServTerceros,
  Impresiones,
  ManoObraOpt,
} from "../models/nuevoPresupuesto.model";
import { AiFillPlusCircle } from "react-icons/ai";

interface TableProps<T> {
  data: T[];
  headers: string[];
  key: keyof Servicio;
  indexServicio: number;
}

export function TableServiceModal<T extends { [key: string]: any }>(
  props: TableProps<T>
) {
  const { presupuesto, setPresupuesto } = usePresupuesto();

  const { data, headers, key, indexServicio } = props;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;

    const servicioActualizado = { ...presupuesto.servicios[indexServicio] };
    if (Array.isArray(servicioActualizado[key] as any[])) {
      const newArray = [...(servicioActualizado[key] as any[])];
      newArray[index][name] = value;

      // Asigna el array actualizado al atributo 'key'
      if (Array.isArray(servicioActualizado[key])) {
        servicioActualizado[key] = newArray;
      }
      // Actualiza el presupuesto con los servicios modificados
      setPresupuesto((prev) => ({
        ...prev,
        servicios: prev.servicios.map((servicio, i) =>
          i === indexServicio ? servicioActualizado : servicio
        ),
      }));
    }
  };
  const agregarItem = (e: React.MouseEvent) => {
    e.preventDefault();
    const updateServicios = [...presupuesto.servicios];

    const EmptyMaterial: Material[] = [
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
    ];
    const EmptyServTerceros: ServTerceros[] = [
      {
        servicioBrindado: "",
        proveedor: "",
        importe: 0,
        factor: 1,
        total: 0,
      },
    ];

    const EmptyViaticos: Viaticos[] = [
      {
        descripcion: "",
        costo: 0,
        noPersonas: 0,
        noDias: 0,
        importe: 0,
        factor: 1,
        total: 0,
      },
    ];
    const EmptyImpresiones: Impresiones[] = [
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
    ];
    let newRow: any;
    if (key === "materiales") newRow = [...EmptyMaterial];
    if (key === "serviciosTerceros") newRow = [...EmptyServTerceros];
    if (key === "viaticos") newRow = [...EmptyViaticos];
    if (key === "impresiones") newRow = [...EmptyImpresiones];

    const newItem = [
      ...(updateServicios[indexServicio][key] as any[]),
      ...newRow,
    ];

    // Actualiza el presupuesto con los servicios modificados
    setPresupuesto((prevPresupuesto) => {
      const updatedServicios = [...prevPresupuesto.servicios];

      updatedServicios[indexServicio][key] = newItem;
      return {
        ...prevPresupuesto,
        servicios: updatedServicios,
      };
    });
  };

  return (
    <div>
      <button onClick={agregarItem}>{<AiFillPlusCircle size={30} />}</button>{" "}
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
                  let inputType: "text" | "number" = "text"; // Tipo de entrada predeterminado

                  // Determina el tipo de entrada en función del tipo de datos en 'item'
                  if (typeof value === "number") {
                    inputType = "number";
                  }
                  return (
                    <td key={valueIndex} className="border-[0.1em]">
                      <input
                        value={value}
                        className="w-full  border-none outline-none"
                        onChange={(e) => handleChange(e, itemIndex)}
                        name={key as any}
                        type={inputType}
                      />
                    </td>
                  );
                }
                return null;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

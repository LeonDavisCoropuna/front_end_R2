import { useEffect, useRef, useState } from "react";
import {
  Presupuesto,
  EmptyPresupuestos,
} from "../../models/nuevoPresupuesto.model";
import Table from "@/components/Table";
import axios from "@/config/axiosConfig";
export default function PresupuestoPage() {
  const ref = useRef(true);
  const [info, setInfo] = useState<Presupuesto[]>(EmptyPresupuestos);
/*
  useEffect(() => {
    if (ref.current) {
      const getInfoClients = async () => {
        try {
          const { data } = await axios.get<Presupuesto[]>(
            "/data/v1/clients/all"
          );
          setInfo(data);
        } catch (error) {
          console.error("Error al obtener los presupuestos:", error);
        }
      };

      getInfoClients(); // Llama a la función para obtener datos de los clientes
    }

    return () => {
      ref.current = false;
    };
  }, []);
  */
  const Keys = [
    "numero",
    "estado",
    "formaPago",
    "referencia",
    "precio",
    "tipo",
    "cliente",
    "nombre",
    "direccion",
    "atencion",
  ];
  const route = "/system/datos/clientes/";
  const routeBack = "/data/v1/clients/";
  return (
    <div className=" bg-[rgb(40,51,85)] overflow-auto h-[30em]">
      {ref.current === true ? (
        <Table
          columns={Keys}
          info={info}
          route={route}
          routeBack={routeBack}
        />
      ) : null}
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import Table from "../../../../../components/Table";
import { Client } from "./client.model";
import axios from "@/config/axiosConfig"
import RouteNotFound from "../../../../../utils/RouteNotFound";
import { Route, Routes } from "react-router-dom";
import ClienteDetalle from "./ClienteDetalle";
export default function Clientes() {
  const clientsData: Client[] = [
    {
      idNum: 1231,
      name: "asdasd",
      dniRuc: "12312312",
      address: "daaaaaaaa",
      telephone: 12312312,
      clientType: "string",
      state: "activo",
    },
    {
      idNum: 6521,
      name: "aaaa",
      dniRuc: "12312312",
      address: "daaaaaaaa",
      telephone: 12312312,
      clientType: "string",
      state: "inactivo",
    },
  ];

  const ref = useRef(true);
  const [info, setInfo] = useState<Client[]>(clientsData);
  /*
  useEffect(() => {
    if (ref.current) {
      const getInfoClients = async () => {
        try {
          const { data } = await axios.get<Client[]>("/data/v1/clients/all");
          setInfo(data);
        } catch (error) {
          console.error("Error al obtener los clientes:", error);
        }
      };

      getInfoClients(); // Llama a la función para obtener datos de los clientes
    }

    // Establece ref.current a false cuando el componente se desmonta
    return () => {
      ref.current = false;
    };
  }, []);
  */
  const clientsKeys = [
    "idNum",
    "name",
    "dniRuc",
    "address",
    "telephone",
    "clientType",
    "state",
  ];
  const route = "/system/datos/clientes/";
  return (
    <div className=" bg-[#283355] overflow-auto h-[30em]">
      {ref.current === true ? (
        <Table columns={clientsKeys} info={info} route={route} />
      ) : null}
    </div>
  );
}

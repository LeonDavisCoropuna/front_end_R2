import { useEffect, useRef, useState } from "react";
import { Presupuesto } from "../../models/nuevoPresupuesto.model";
import {
  adaptPresupuesto,
  PresupuestoAdapter,
} from "../../adapters/presupuesto.adapter";
import axios from "@/config/axiosConfig";
export default function getPresupuestos() {
  const ref = useRef(true);
  const [info, setInfo] = useState<PresupuestoAdapter[]>([]);

  useEffect(() => {
    if (ref.current) {
      const getInfoClients = async () => {
        try {
          const { data } = await axios.get<Presupuesto[]>(
            "/data/v1/clients/all"
          );

          const adaptedData: PresupuestoAdapter[] = data.map((presupuesto) =>
            adaptPresupuesto(presupuesto)
          );

          setInfo(adaptedData);
        } catch (error) {
          console.error("Error al obtener los clientes:", error);
        }
      };
      getInfoClients(); // Llama a la función para obtener datos de los clientes
    }

    return () => {
      ref.current = false;
    };
  }, []);

  return info;
}

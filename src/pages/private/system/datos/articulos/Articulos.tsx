import Table from "../../../../../components/Table";
import { Articulo } from "./articulo.model";
import { useRef, useState, useEffect } from "react";
import axios from "@/config/axiosConfig";
function ArticulosIndex() {
  const ref = useRef(true);
  const [info, setInfo] = useState<Articulo[]>([]);
  
  
  useEffect(() => {
    if (ref.current) {
      const getInfoClients = async () => {
        try {
          const { data } = await axios.get<Articulo[]>("/data/articles/all");
          console.log(data);
          setInfo(data);
        } catch (error) {
          console.error("Error al obtener los articulos:", error);
        }
      };
      getInfoClients(); // Llama a la función para obtener datos de los clientes
    }

    // Establece ref.current a false cuando el componente se desmonta
    return () => {
      ref.current = false;
    };
  }, []);
  
  const articuloKeys = [
    "idN",
    "nombre",
    "categoria",
    "tipo",
    "precio",
    "impuesto",
    "stock",
    "stockMin",
    "stockMax",
  ];
  const route = "/system/datos/articulos/";

  return (
    <div className=" bg-[#283355] overflow-auto h-[30em]">
      {ref.current === true ? (
        <Table columns={articuloKeys} info={info} route={route}/>
      ) : null}
    </div>
  );
}

export default ArticulosIndex;

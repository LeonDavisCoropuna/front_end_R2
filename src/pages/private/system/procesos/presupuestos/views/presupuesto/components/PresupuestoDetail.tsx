import { usePresupuesto } from "../../../context/PresupuestoContext";
import TitlePage from "@/components/TitlePage";
import InformacionPresupuesto from "../../../components/InformacionPresupuesto";
import TablePresupuesto from "../../../components/TablePresupuesto";
import { useEffect } from "react";
import { isNumeric } from "@/utils/decodeToken.utils";
import axios from "@/config/axiosConfig";
import { Presupuesto } from "../../../models/nuevoPresupuesto.model";

export const PresupuestoDetail: React.FC<{
  id?: string;
}> = ({ id }) => {
  const { setPresupuesto } = usePresupuesto();

  useEffect(() => {
    if (id && isNumeric(id)) {
      const fetchPresupuestoDetail = async () => {
        try {
          const res = await axios.get<Presupuesto>(`/data/v1/clients/${id}`);
          setPresupuesto(res.data);
        } catch (error) {
          console.error(`"Error fetching presupuesto:"`, error);
        }
      };

      fetchPresupuestoDetail();
    }
  }, [id, setPresupuesto]);

  return (
    <>
      <TitlePage title={`Presupuesto ${id}`} />
      <form className="text-xs px-2 py-2 gap-2">
        <InformacionPresupuesto />
        <TablePresupuesto />
      </form>
    </>
  );
};

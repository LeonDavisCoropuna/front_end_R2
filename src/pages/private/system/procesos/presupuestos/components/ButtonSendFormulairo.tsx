import axios from "@/config/axiosConfig"
import { usePresupuesto } from "../context/PresupuestoContext";
export const ButtonSendFormulario :React.FC<{route:string}> = ({route}) => {
    const {presupuesto} = usePresupuesto();
    const handleClickSubmit = async (e:React.MouseEvent) => {
        e.preventDefault();
        const res = await axios.post(route,presupuesto);
        console.log(res)
    }
    return <div className="bottom-20 absolute ml-5">
        <button onClick={handleClickSubmit}>
            Enviar
        </button>
    </div>
}
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Client, ClientEmpty } from "./client.model";
import axios from "@/config/axiosConfig";

const ClienteDetalle = () => {
  const { id } = useParams<{ id: string }>();
  const [client, setClient] = useState<Client>(ClientEmpty);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchClient = async () => {
      try {
        const res = await axios.get<Client>(`/data/v1/client/${id}`);
        setClient(res.data);
      } catch (error) {
        console.error("Error fetching client:", error);
      }
    };

    fetchClient();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      await axios.put<Client>(`/data/v1/client/${id}`, client);
      alert("Envío correcto");
      navigate(-1);
    } catch (error) {
      alert("Ocurrió un error en el servidor");
    }
  };
  return (
    <div className="items-start text-[0.9em] flex flex-col">
      <div className="flex-[0.2]">
        <form className=" mt-5 p-2 ml-5 border-2 rounded-md flex flex-col flex-[0.3] gap-y-2">
          <div className=" hover:bg-slate-200 hover:rounded-md flex justify-between">
            <span>ID: </span>
            <div className="border-b-2 border-blue-800">
              <input value={client.idNum} className=" bg-transparent" />
            </div>
          </div>
          <label className=" hover:bg-slate-200 hover:rounded-md flex justify-between gap-2">
            <span>Name: </span>
            <span className="border-b-2 border-blue-600">
              <input
                className="focus:border-none border-none bg-transparent"
                value={client.name}
                name="name"
                onChange={handleChange}
              />
            </span>
          </label>
          <label className=" hover:bg-slate-200 hover:rounded-md flex justify-between">
            <span>DNI/RUC: </span>
            <span className="border-b-2 border-blue-600">
              <input
                className="focus:border-none border-none bg-transparent"
                value={client.dniRuc}
                name="dniRuc"
                onChange={handleChange}
              />
            </span>
          </label>
          <label className=" hover:bg-slate-200 hover:rounded-md flex justify-between">
            <span>Address: </span>
            <span className="border-b-2 border-blue-600">
              <input
                className="focus:border-none border-none bg-transparent"
                value={client.address}
                name="address"
                onChange={handleChange}
              />
            </span>
          </label>
          <label className=" hover:bg-slate-200 hover:rounded-md flex justify-between">
            <div>Telephone: </div>
            <div className="border-b-2 border-blue-600">
              <input
                className="focus:border-none border-none bg-transparent"
                value={client.telephone}
                name="telephone"
                onChange={handleChange}
              />
            </div>
          </label>
          <label className=" hover:bg-slate-200 hover:rounded-md flex justify-between">
            <span>Client Type: </span>
            <span className="border-b-2 border-blue-600">
              <input
                className="focus:border-none border-none bg-transparent "
                value={client.clientType}
                name="clientType"
                onChange={handleChange}
              />
            </span>
          </label>
          <label className=" hover:bg-slate-200 hover:rounded-md flex justify-between ">
            <span>State: </span>
            <span className="border-b-2 border-blue-600">
              <input
                className="focus:border-none border-none bg-transparent"
                value={client.state}
                name="state"
                onChange={handleChange}
              />
            </span>
          </label>

          <div className="flex-[0.8]">
            <button
              type="submit"
              className="bg-blue-500 rounded-md hover:bg-slate-400 py-2 px-5 mt-3"
              onClick={handleSubmit}
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClienteDetalle;

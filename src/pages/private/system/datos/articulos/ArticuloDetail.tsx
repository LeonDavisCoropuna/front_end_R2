import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Articulo, ArticuloEmpty, keysArticulo } from "./articulo.model";
import axios from "@/config/axiosConfig";
import { isNumeric } from "@/utils/decodeToken.utils";

const ClienteDetalle = () => {
  const { id } = useParams<{ id: string }>();
  const [articulo, setArticulo] = useState<Articulo>(ArticuloEmpty);
  const navigate = useNavigate();

  useEffect(() => {
    if (id && isNumeric(id)) {
      const fetchArticulo = async () => {
        try {
          const res = await axios.get<Articulo>(`/data/v1/article/${id}`);
          setArticulo(res.data);
        } catch (error) {
          console.error("Error fetching article:", error);
        }
      };

      fetchArticulo();
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof Articulo
  ) => {
    // Solo permite cambios si la clave no es "idN"
    if (key !== "idN") {
      setArticulo({
        ...articulo,
        [key]: e.target.value,
      });
    }
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log(id);
    try {
      if (id && isNumeric(id)) {
        await axios.put<Articulo>(`/data/v1/client/${id}`, articulo);
      } else {
        await axios.post<Articulo>(`/data/v1/client/`, articulo);
      }
      navigate(-1);
    } catch (error) {
      alert("Ocurrió un error en el servidor");
    }
  };

  return (
    <div className="items-start text-[0.9em] flex flex-col">
      <div className="flex-[0.2]">
        <form className=" mt-5 p-2 ml-5 border-2 rounded-md flex flex-col flex-[0.3] gap-y-2">
          {keysArticulo.map((key) => (
            <div
              key={key}
              className="hover:bg-slate-200 hover:rounded-md flex justify-between"
            >
              <span>{key}: </span>
              <span className="border-b-2 border-blue-600">
                {key === "idN" ? (
                  <input value={articulo[key]} />
                ) : (
                  <input
                    className="focus:border-none border-none bg-transparent"
                    value={articulo[key]}
                    name={key}
                    onChange={(e) => handleChange(e, key)}
                  />
                )}
              </span>
            </div>
          ))}

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

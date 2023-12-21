import { useEffect } from "react";
import axios from "@/config/axiosConfig";

function Plantilla() {
  useEffect(() => {
    const fetch = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiLCJST0xFX0FETUlOIl0sInN1YiI6ImFsZG8iLCJpYXQiOjE3MDMxMzMwMjcsImV4cCI6MTcwMzEzNDQ2N30.5U701lSbY3OlQ8fE731hOOu8CbA_2NZHLC3clR4LX_s"

        // Hacer otra solicitud con el token en el encabezado de autorización
        const dataResponse = await axios.get("/data/clients/all", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log(dataResponse);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetch();
  }, []);

  return <div></div>;
}

export default Plantilla;

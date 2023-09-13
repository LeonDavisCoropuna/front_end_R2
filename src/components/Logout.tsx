import Cookies from "js-cookie";
import { tokenKey } from "../utils/decodeToken.utils";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const logout = () => {
    const token = Cookies.get(tokenKey);
    if (token) {
      Cookies.remove(tokenKey);
    }
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button
        onClick={logout}
        className="w-full bg-slate-100 border-white  text-black border-2 rounded-md"
      >
        User
      </button>
      <div onClick={goBack}>Back</div>
    </div>
  );
}

export default Logout;

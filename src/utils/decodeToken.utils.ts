import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
export const decodeToken = (token: string) => {
  const tok = Cookies.get(token);
  if (tok) {
    const content = jwtDecode(tok); 
    return content;
  }
  return null;
};

export const tokenKey = "token";

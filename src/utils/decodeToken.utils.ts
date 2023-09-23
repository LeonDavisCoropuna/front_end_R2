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
export const isNumeric = (text:string)=>{
  if(typeof text === "number") return 1;
  return 0;
}
export const tokenKey = "token";

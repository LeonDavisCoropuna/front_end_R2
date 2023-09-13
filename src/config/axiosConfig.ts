import axios from "axios";
export const instance = axios.create({
  baseURL: "http://192.168.1.73:8080",
  timeout: 5000,
  withCredentials: true,
});

export default instance;

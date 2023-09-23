import axios from "axios";
export const instance = axios.create({
  baseURL: "http://192.168.1.108:8080",
  timeout: 3000,
  withCredentials: true,
});

export default instance;

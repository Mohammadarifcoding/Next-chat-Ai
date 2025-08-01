import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 50000,
});

export const useAxios = () => {
  return instance;
};

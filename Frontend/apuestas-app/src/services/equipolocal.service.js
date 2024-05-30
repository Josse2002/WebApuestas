import { CORE_API_URL } from "@/constants/session";
import axios from "axios";

const api = axios.create({
  baseURL: CORE_API_URL,
});

export const getAllEquipoLocal = async () => {
  return api.get(`/local`)
      .then((response) => {
          return response.data;
    })
    .catch((error) => {
      return error;
    });
};

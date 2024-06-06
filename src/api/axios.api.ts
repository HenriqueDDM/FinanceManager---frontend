import axios from "axios";
import { getTokenFromLocalStorage } from "../helpers/localstorage.helper";

export const instance = axios.create({
  baseURL: "https://financemanager-9mqi.onrender.com/api",
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage() || ""}`,
  },
});

import axios from "axios";
import { API_URL } from "../constants";

export const getNFts = async (limit: number, offset: number) => {
  return await axios.get(`${API_URL}&limit=${limit}&offset=${offset}`);
};

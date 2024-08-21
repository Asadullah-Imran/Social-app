import axios from "axios";
const API_URL = "http://localhost:3000/api/auth/";

export const login = async (email, password) =>
  axios.post(`${API_URL}login`, { email, password }, { withCredentials: true });

export const register = async (formdata) => {
  await axios.post(`${API_URL}register`, formdata);
};

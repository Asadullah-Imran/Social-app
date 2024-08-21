import axios from "axios";
const API_URL = "http://localhost:3000/api/auth/";

export const login = async (email, password) => {};

export const register = async (formdata) => {
  await axios.post(`${API_URL}register`, formdata);
};

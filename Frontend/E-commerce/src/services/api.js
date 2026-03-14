import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api", // backend URL
  withCredentials: true,
});

export default API;
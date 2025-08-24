import axios from "axios";

// const BASE_URL = import.meta.env.MODE === "development" ? "https://talksy-ashen.vercel.app/api" : "/api";
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"   // local dev backend
    : "https://talksy-ashen.vercel.app/api"; // deployed backend

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});

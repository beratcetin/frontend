import axios from "axios";
export default axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5173/api",

  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json;charset=UTF-8"
  },
});

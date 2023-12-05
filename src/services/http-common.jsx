import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:5173/venues.json",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json;charset=UTF-8"
  },
});

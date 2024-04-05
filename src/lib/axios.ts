import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-type": "application/json",
    "X-Api-Key": import.meta.env.API_KEY,
  },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3257ea0627e04bef85c4d99997d86981",
  },
});

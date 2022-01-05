import axios from "axios";

const instance = axios.create({
  baseURL: "...", // The API {Cloud Functon} url
});

export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-9a4e9/us-central1/api", // The API {Cloud Functon} url
});

export default instance;

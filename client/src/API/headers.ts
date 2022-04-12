import axios from "axios";

let baseUrl = "http://127.0.0.1:8080/";

export default axios.create({
  baseURL: baseUrl,
});

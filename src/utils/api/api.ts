import API from "./api.utils.ts";

// const baseURL = "http://localhost:8081/";
const baseURL = "https://jsonplaceholder.typicode.com/";

export const api = new API({
  baseURL,
});

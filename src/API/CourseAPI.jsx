import { api } from "./api";

const getCourseById = (id) => {
  let url = "course/" + id;
  return api("GET", url, null);
};

export { getCourseById };

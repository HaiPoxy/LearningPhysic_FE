import { api } from "./api";

const getLessonById = (id) => {
  let url = "lesson/" + id;
  return api("GET", url, null);
};

export { getLessonById};
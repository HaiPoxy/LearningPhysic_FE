import { api } from "./api";

const getExerciseById = (id) => {
  let url = "exercise/" + id;
  return api("GET", url, null);
};

export { getExerciseById};
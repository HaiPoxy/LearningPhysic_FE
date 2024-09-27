import { api } from "./api";

const getTheoryById = (id) => {
  let url = "theory/" + id;
  return api("GET", url, null);
};

export { getTheoryById};
import { api } from "./api";

const getQuestionById = (id) => {
  let url = "question/" + id;
  return api("GET", url, null);
};

export { getQuestionById};
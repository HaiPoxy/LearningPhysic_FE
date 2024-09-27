import axios from "axios";
//Khai báo cấu hình chung cho API
const axiosClient = axios.create({
  baseURL: "http://localhost:8081/api/v1/",
  headers: {
    "content-type": "application/json",
  },
});
//baseURL+ endpoint ==>link API
//lấy dữ liệu cần đẩy cái gì vào là payload
export const api = (method, endpoint, payload) => {
  return axiosClient(endpoint, { method: method, data: payload })
    .then((response) => {
      //console.log("api");
      return response.data;

    })
    .catch((error) => {
      console.log(error);
    });
};

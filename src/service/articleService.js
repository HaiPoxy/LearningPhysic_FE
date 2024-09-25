// src/services/articleService.js
import axios from "axios";

// Địa chỉ của API backend Spring Boot
const API_URL = "http://localhost:8080/api/articles";

// Lấy tất cả các bài viết
export const getArticles = async () => {
  return await axios.get(API_URL);
};

// Lấy một bài viết theo ID
export const getArticleById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

// Tạo bài viết mới
export const createArticle = async (article) => {
  return await axios.post(API_URL, article);
};

// Cập nhật bài viết
export const updateArticle = async (id, article) => {
  return await axios.put(`${API_URL}/${id}`, article);
};

// Xóa bài viết
export const deleteArticle = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

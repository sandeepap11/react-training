import axios from "axios";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

export const getPosts = () => axios.get(`${API_ENDPOINT}/posts`);

export const createPost = body =>
  axios.post(`${API_ENDPOINT}/posts`, {
    body,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });

export const deletePost = postId =>
  axios.delete(`${API_ENDPOINT}/posts/${postId}`);

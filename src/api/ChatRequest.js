import axios from 'axios';
const API = axios.create({baseURL: "https://electric-blue-ray-yoke.cyclic.app"})


export const userChats = (id) => API.get(`/chat/${id}`)
export const chatRequest = (data) => API.post(`/chat`,data)
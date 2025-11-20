import axios from 'axios';

export const api = axios.create({
  baseURL: `http://45.147.201.155:3000`
})
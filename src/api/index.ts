import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.PROTOCOL}://${process.env.HOST_URL}`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
})
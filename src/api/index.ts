import axios from 'axios';

console.log(process.env.PROTOCOL)
console.log(process.env.HOST_URL)

export const api = axios.create({
  baseURL: 'http://45.147.201.155:3000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
})
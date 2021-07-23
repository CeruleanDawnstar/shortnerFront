import axios from "axios";

const token = JSON.parse(localStorage.getItem('token'));

export default axios.create({
  baseURL: "http://localhost:8125",
  headers: {
    "Content-type": "application/json",
    "Authorization": token
  }
});
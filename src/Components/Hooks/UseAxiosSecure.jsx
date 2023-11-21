import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5002",
});

const UseAxiosSecure = () => {
  return axiosSecure;
};

export default UseAxiosSecure;

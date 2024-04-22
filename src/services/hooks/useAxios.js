import axios from "axios";
import {
  BAD_REQUEST_ERROR,
  LOGIN_ERROR,
  NETWORK_ERROR,
} from "../common/error-status";

const useAxios = () => {
  const axiosConfig = { baseURL: "http://127.0.0.1:8000/" };
  const api = axios.create(axiosConfig);

  api.interceptors.request.use((axiosConfig) => {
    return axiosConfig;
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  /**declear headers */

  const apiClient = (method, url, body) => {
    const headers = {
      authorization: localStorage.getItem("token")
        ? "Bearer " + localStorage.getItem("token")
        : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhaGFhbmlrMTA0NUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTM0MzQ2MDEsImV4cCI6MTcxMzQ2MzQwMX0.6pp758OQ1oR7Dp_197Yl0xeGmaHbCWu0Ik5EHcxZBgg",
    };
    return api
      .request({ method, url, data: body, headers })
      .then((response) => {
        return response || null;
      })
      .catch((error) => {
        console.log(`${error}`);
        if (error.message === NETWORK_ERROR) {
          console.log(error);
        } else if (error.message === LOGIN_ERROR) {
          alert("Protected page.Please login with valid user");
        } else if (error.message === BAD_REQUEST_ERROR) {
          alert("Please give the valid input");
        } else {
          alert(error.message);
        }
        return null;
      });
  };

  return { apiClient };
};

export default useAxios;

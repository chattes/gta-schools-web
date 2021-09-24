import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
  withCredentials: false,
});

export const searchSchools = async (query) => {
  try {
    const response = await instance({
      url: "/search",
      params: {
        name: query,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }

    return [];
  }
};

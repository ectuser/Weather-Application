import axios from "axios";

const API_URL = "http://localhost:5000/";

export const Api = axios.create({
    baseURL: `${API_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
});

// Api.interceptors.request.use(
//   async (config) => {
//     const token = 228;
//     return {
//       ...config,
//       headers: {
//         ...config.headers,
//         Authorization: token ? `Bearer ${token}` : '',
//       },
//     };
//   },
//   (error) => {
//     console.warn('error', error);
//     return Promise.reject(error);
//   },
// );

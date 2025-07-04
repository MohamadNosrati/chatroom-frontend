import axios from "axios";
import { getToken } from "../actions/auth/authActions";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKENDURL
})


axiosInstance.interceptors.request.use(async (request)=>{
  if (!request.headers.Authorization) {
    const jwt = await getToken();
    console.log("this jwttttttttttttttt",jwt)
    if (jwt?.token) {
      request.headers.Authorization = `Bearer ${jwt.token}`;
    }
  }
  return request;
})

export default axiosInstance;
import type { AxiosPromise, AxiosRequestConfig } from "axios";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL as string;

export const createRequest = <T>(config: AxiosRequestConfig): AxiosPromise<T> =>
  axios(config);

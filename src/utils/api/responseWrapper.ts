import type { AxiosPromise, AxiosResponse } from "axios";

const baseMapper = <T, M = T>(response: AxiosResponse<T>): M =>
  response.data as T | M as M;

/**
 * Wraps a query function to pick particular keys from the response.
 *
 * Defaults to the `data` key in the response.
 */
export const responseWrapper = <T = unknown, M = T>(
  promise: AxiosPromise<T>,
  mapper: (response: AxiosResponse<T>) => M = baseMapper,
) => promise.then(mapper);

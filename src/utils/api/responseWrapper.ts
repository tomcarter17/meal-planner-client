import { type AxiosResponse, type AxiosPromise } from "axios";

// TODO: Figure out a way to satisfy this rule
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
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

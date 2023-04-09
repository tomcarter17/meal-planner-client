export interface DjangoListResponse<T> {
  count: number;
  next: { page: number } | null;
  previous: { page: number } | null;
  results: T[];
}

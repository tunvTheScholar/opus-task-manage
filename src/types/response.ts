export type TPaginationResponse<T> = {
  first: number;
  prev: number;
  next: number | null;
  last: number | null;
  pages: number;
  items: number;
  data: T;
};

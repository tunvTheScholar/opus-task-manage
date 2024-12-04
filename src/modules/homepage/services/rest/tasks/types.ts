import { TPagination } from "../../../../../types/request";

export type TTask = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: number; // timestamp
  updatedAt: number; // timestamp
};

export type TTaskPaginationRequest = TPagination & {
  completed?: boolean;
};

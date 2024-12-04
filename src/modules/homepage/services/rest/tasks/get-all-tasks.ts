import { TPaginationResponse } from "../../../../../types/response";
import { ENDPOINTS } from "../endpoints";
import { TTask, TTaskPaginationRequest } from "./types";

export const getAllTasks = async ({
  limit = 10,
  page = 1,
  completed,
}: TTaskPaginationRequest): Promise<TPaginationResponse<TTask[]>> => {
  const url = new URL(ENDPOINTS.TASKS);
  url.searchParams.set("_per_page", `${limit}`);
  url.searchParams.set("_page", `${page}`);
  if (completed !== undefined) {
    url.searchParams.set("completed", `${completed}`);
  }

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const tasks = (await res.json()) as TPaginationResponse<TTask[]>;
    return tasks;
  } catch (error) {
    // logging error
    // e.g. using Telegram bot
    throw error;
  }
};

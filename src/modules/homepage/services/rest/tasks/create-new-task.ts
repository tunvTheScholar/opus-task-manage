import { ENDPOINTS } from "../endpoints";
import { TTask } from "./types";

export const createNewTask = (task: TTask) =>
  fetch(ENDPOINTS.TASKS, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(task),
  });

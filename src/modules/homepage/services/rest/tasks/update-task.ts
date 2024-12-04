import { ENDPOINTS } from "../endpoints";
import { TTask } from "./types";

export const updateTask = (task: Partial<TTask>) =>
  fetch(`${ENDPOINTS.TASKS}/${task.id}`, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

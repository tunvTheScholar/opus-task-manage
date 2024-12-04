import { ENDPOINTS } from "../endpoints";

export const deleteTask = (taskId: string) =>
  fetch(`${ENDPOINTS.TASKS}/${taskId}`, {
    method: "DELETE",
  });

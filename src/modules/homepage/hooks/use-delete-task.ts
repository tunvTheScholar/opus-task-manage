import { useMutation } from "@tanstack/react-query";
import { deleteTask } from "../services/rest/tasks/delete-task";

export const useDeleteTask = () =>
  useMutation({
    mutationKey: ["deleteTask"],
    mutationFn: deleteTask,
  });

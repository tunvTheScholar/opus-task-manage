import { useMutation } from "@tanstack/react-query";
import { createNewTask } from "../services/rest/tasks/create-new-task";

export const useCreateTask = () =>
  useMutation({
    mutationKey: ["createTask"],
    mutationFn: createNewTask,
  });

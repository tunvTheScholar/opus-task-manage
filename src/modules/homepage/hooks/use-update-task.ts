import { useMutation } from "@tanstack/react-query";
import { updateTask } from "../services/rest/tasks/update-task";

export const useUpdateTask = () =>
  useMutation({ mutationKey: ["updateTask"], mutationFn: updateTask });

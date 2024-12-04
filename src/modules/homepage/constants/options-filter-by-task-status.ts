import { SelectProps } from "antd/es/select";
import { ETaskFilter } from "../types";

export const optionsFilterByTaskStatus: SelectProps["options"] = [
  {
    label: "All",
    value: ETaskFilter.All,
  },
  {
    label: "Completed",
    value: ETaskFilter.Completed,
  },
  {
    label: "In Progress",
    value: ETaskFilter.InCompleted,
  },
];

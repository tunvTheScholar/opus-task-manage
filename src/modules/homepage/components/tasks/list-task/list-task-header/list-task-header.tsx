import { Select } from "antd";
import { optionsFilterByTaskStatus } from "../../../../constants/options-filter-by-task-status";
import { ETaskFilter } from "../../../../types";
import classes from "./list-task-header.module.css";

interface ListTaskHeaderProps {
  taskStatus: ETaskFilter;
  onChangeTaskStatus: (status: ETaskFilter) => void;
}
export default function ListTaskHeader({
  taskStatus,
  onChangeTaskStatus,
}: ListTaskHeaderProps) {
  return (
    <div data-testid="ListTasks-Header" className={classes.root}>
      <div data-testid="ListTasks-Header-FilterByCompleted">
        <Select
          value={taskStatus}
          onChange={onChangeTaskStatus}
          className={classes.filterByCompleted}
          defaultValue={ETaskFilter.All}
          options={optionsFilterByTaskStatus}
        />
      </div>
    </div>
  );
}

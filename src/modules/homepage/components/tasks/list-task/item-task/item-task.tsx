import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Checkbox, List, Popconfirm } from "antd";
import { lazy, Suspense } from "react";
import { useDisclosure } from "../../../../../../hooks/use-disclosure";
import { TTask } from "../../../../services/rest/tasks/types";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteTask } from "../../../../hooks/use-delete-task";
import toast from "react-hot-toast";

const EditTask = lazy(() => import("./edit-task"));

interface ItemTaskProps extends TTask {}
export default function ItemTask(task: ItemTaskProps) {
  const [isEditing, { toggle: onToggleEdit }] = useDisclosure();
  const query = useQueryClient();
  const { mutate: onDeleteTask, isPending: deletingTask } = useDeleteTask();

  const handleDeleteTask = () => {
    onDeleteTask(task.id, {
      onSuccess(data, variables, context) {
        query.invalidateQueries({ queryKey: ["listTasks"] });
        toast.success("Task deleted successfully!");
      },
      onError(error, variables, context) {
        toast.error("Failed to delete task!");
      },
    });
  };

  return (
    <List.Item
      actions={[
        <Button key="edit" onClick={onToggleEdit} icon={<EditOutlined />} />,
        <Popconfirm
          key="delete"
          title="Are you sure to delete this task?"
          onConfirm={handleDeleteTask}
        >
          <Button danger icon={<DeleteOutlined />} loading={deletingTask} />
        </Popconfirm>,
      ]}
    >
      {isEditing ? (
        <Suspense fallback={null}>
          <EditTask {...task} onUpdateSuccess={onToggleEdit} />
        </Suspense>
      ) : (
        <List.Item.Meta
          title={task.title}
          description={task.description}
          avatar={<Checkbox checked={task.completed} />}
        />
      )}
    </List.Item>
  );
}

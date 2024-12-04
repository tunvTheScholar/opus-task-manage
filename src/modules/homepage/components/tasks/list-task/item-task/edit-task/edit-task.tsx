import { Button, Form, Input, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useUpdateTask } from "../../../../../hooks/use-update-task";
import { TTask } from "../../../../../services/rest/tasks/types";
import { useQueryClient } from "@tanstack/react-query";
import { noop } from "antd/es/_util/warning";
import toast from "react-hot-toast";

interface EditTaskProps extends TTask {
  onUpdateSuccess?: () => void;
}
export default function EditTask({
  onUpdateSuccess = noop,
  ...props
}: EditTaskProps) {
  const { mutate: onUpdateTask, isPending: updatingTask } = useUpdateTask();
  const query = useQueryClient();

  const handleUpdateTask = (values: TTask) => {
    const updatedTask = { ...props, ...values };
    onUpdateTask(updatedTask, {
      onSuccess(data, variables, context) {
        query.invalidateQueries({ queryKey: ["listTasks"] });
        toast.success("Task updated successfully!");
        onUpdateSuccess();
      },
      onError(error, variables, context) {
        toast.error("Failed to update task!");
      },
    });
  };

  return (
    <Form<TTask>
      layout="vertical"
      style={{ width: "100%" }}
      initialValues={props}
      onFinish={handleUpdateTask}
    >
      <Form.Item
        name="title"
        rules={[{ required: true }, { max: 60, message: "Too long" }]}
      >
        <Input placeholder="Enter title" />
      </Form.Item>
      <Form.Item name="description">
        <TextArea placeholder="Enter description" />
      </Form.Item>
      <Form.Item name="completed">
        <Switch />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" loading={updatingTask}>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}

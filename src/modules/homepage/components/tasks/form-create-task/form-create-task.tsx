import { useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { generateUniqueId } from "../../../../../libs/generate-unique-id";
import { useCreateTask } from "../../../hooks/use-create-task";
import { TTask } from "../../../services/rest/tasks/types";
import { TFormCreateTask } from "./types";
import toast from "react-hot-toast";

interface FormCreateTaskProps {}
export default function FormCreateTask(props: FormCreateTaskProps) {
  const query = useQueryClient();
  const { isPending, mutate: onCreateNewTask } = useCreateTask();
  const [form] = Form.useForm();

  const handleCreateNewTask = ({
    title,
    description = "",
  }: TFormCreateTask) => {
    const task: TTask = {
      id: generateUniqueId(),
      title,
      description,
      completed: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    onCreateNewTask(task, {
      onSuccess(data, variables, context) {
        form.resetFields();
        query.invalidateQueries({ queryKey: ["listTasks"] });
        toast.success("Task created successfully!");
      },
      onError(error, variables, context) {
        toast.error("Failed to create task!");
      },
    });
  };

  return (
    <Form<TFormCreateTask>
      layout="vertical"
      onFinish={handleCreateNewTask}
      form={form}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true }, { max: 60, message: "Too long" }]}
      >
        <Input placeholder="Enter title" />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ max: 255, message: "Too long" }]}
      >
        <TextArea placeholder="Enter description" showCount />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" loading={isPending}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

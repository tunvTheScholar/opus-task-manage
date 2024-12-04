import { Typography } from "antd";
import ListTask from "./components/tasks/list-task";
import FormCreateTask from "./components/tasks/form-create-task";

interface HomePageProps {}
export default function HomePage(props: HomePageProps) {
  return (
    <main data-testid="Homepage" className="container">
      <Typography.Title>Opus Tasks Manager</Typography.Title>
      <div data-testid="Tasks-FormCreateTask">
        <FormCreateTask />
      </div>
      <div data-testid="Tasks-List">
        <Typography.Title level={2}>Todos</Typography.Title>
        <ListTask />
      </div>
    </main>
  );
}

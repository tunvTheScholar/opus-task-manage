import { Button, List } from "antd";
import { useState } from "react";
import { useListTasks } from "../../../hooks/use-list-tasks";
import { ETaskFilter } from "../../../types";
import ItemTask from "./item-task";
import ListTaskHeader from "./list-task-header";
import ListTaskFooter from "./list-task-footer";

interface ListTaskProps {}
export default function ListTask(props: ListTaskProps) {
  // filter options for list
  // we can use search params
  const [taskStatus, setTaskStatus] = useState(ETaskFilter.All);
  // we have 2 options to handle list
  // 1.page - pagination
  // 2.loadmore
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const { data, isLoading } = useListTasks({
    status: taskStatus,
    limit,
    page,
  });

  // const tasks = data?.pages.flatMap((page) => page.data);

  return (
    <List
      loading={isLoading}
      dataSource={data?.data}
      locale={{ emptyText: "There is no task to complete :(" }}
      header={
        <ListTaskHeader
          taskStatus={taskStatus}
          onChangeTaskStatus={(status) => setTaskStatus(status)}
        />
      }
      footer={
        <ListTaskFooter
          total={data?.pages}
          page={page}
          limit={limit}
          onChangePage={(p) => setPage(p)}
        />
      }
      bordered
      renderItem={(task) => <ItemTask {...task} />}
      // loadMore={
      //   hasNextPage ? (
      //     <Button onClick={() => fetchNextPage()}>Load more</Button>
      //   ) : null
      // }
    />
  );
}

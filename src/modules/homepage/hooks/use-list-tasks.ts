import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getAllTasks } from "../services/rest/tasks/get-all-tasks";
import { ETaskFilter } from "../types";

interface IUseListTasks {
  page?: number;
  limit?: number;
  status?: ETaskFilter;
}
export const useListTasks = ({
  limit,
  page,
  status = ETaskFilter.All,
}: IUseListTasks) => {
  const completed =
    status === ETaskFilter.All ? undefined : status === ETaskFilter.Completed;
  // option 1: Query - Pagination
  return useQuery({
    queryKey: ["listTasks", page, limit, status],
    queryFn: () => getAllTasks({ page, limit, completed }),
  });
  // option 2: InfiniteQuery - Loadmore
  // return useInfiniteQuery({
  //   queryKey: ["listTasks", limit, status],
  //   queryFn: ({ pageParam }) =>
  //     getAllTasks({ page: pageParam, limit, completed }),
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage) => {
  //     return lastPage.next;
  //   },
  // });
};

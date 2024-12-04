import { Pagination } from "antd";
import { noop } from "antd/es/_util/warning";

interface ListTaskFooterProps {
  total?: number;
  page?: number;
  limit?: number;
  onChangePage?: (page: number) => void;
}
export default function ListTaskFooter({
  total,
  page,
  limit,
  onChangePage = noop,
}: ListTaskFooterProps) {
  return (
    <div>
      <Pagination
        total={total}
        current={page}
        defaultCurrent={1}
        pageSize={limit}
        onChange={onChangePage}
      />
    </div>
  );
}

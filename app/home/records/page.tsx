"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  SortDescriptor,
} from "@nextui-org/table";
import { Spinner } from "@nextui-org/spinner";
import { Pagination } from "@nextui-org/pagination";

import useSWR from "swr";
import { useCallback, useMemo, useState } from "react";
import { Pagination as Page, Record as Rec } from "@/types";
import { DeleteIcon, EyeIcon } from "@/components/icons";
import { Tooltip } from "@nextui-org/tooltip";
import { formatDate } from "@/utils/date";
import { UUID } from "crypto";
import { UNAUTHORIZED_CODE } from "@/types/statusCode";
import { useRouter } from "next/navigation";
import { Select, SelectItem } from "@nextui-org/select";
import { mathIcons, mathOptions, OperationType } from "@/config/operation";
import { DateValue } from "@react-types/datepicker";
import { DatePicker } from "@nextui-org/date-picker";
import { useDisclosure } from "@nextui-org/modal";

import TableModal, {
  DELETE_CONFIRMATION_MODAL,
  DETAIL_MODAL,
  ModalTye,
} from "./modals";

async function fetcher(
  input: RequestInfo,
  init?: RequestInit
): Promise<Page<Rec>> {
  const res = await fetch(input, init);
  return res.json();
}

export default function Record() {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [operation, setOperation] = useState<OperationType>();
  const [startDate, setStartDate] = useState<DateValue>();
  const [endDate, setEndDate] = useState<DateValue>();
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(10);
  const [refresh, setRefresh] = useState(false);
  const [modalRec, setModalRec] = useState<Rec>();
  const [modalType, setModalType] = useState<ModalTye>();

  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "date",
    direction: "descending",
  });

  let url =
    `/api/records?page=${page - 1}&size=${rows}&orderBy=${sortDescriptor.column}` +
    `&direction=${sortDescriptor.direction}`;

  // filters
  if (operation) {
    url = `${url}&operationType=${operation}`;
  }
  if (startDate) {
    url = `${url}&startDate=${startDate}`;
  }
  if (endDate) {
    url = `${url}&endDate=${endDate}`;
  }

  const { data, isLoading, mutate } = useSWR(`${url}`, fetcher, {
    keepPreviousData: true,
  });

  const items: Rec[] = data?.content ?? [];

  const sortedItems = useMemo(() => {
    return [...items].sort((a: Rec, b: Rec) => {
      const first = a[sortDescriptor.column as keyof Rec] as number;
      const second = b[sortDescriptor.column as keyof Rec] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const pages = useMemo(() => {
    return data?.totalElements ? Math.ceil(data.totalElements / rows) : 0;
  }, [data?.totalElements, rows]);

  const loadingState = isLoading ? "loading" : "idle";

  async function deleteRecord(id: UUID) {
    const response = await fetch(`/api/operation/delete/${id}`, {
      method: "DELETE",
    });
    const statusCode = response.status;
    if (statusCode == UNAUTHORIZED_CODE) {
      router.push("/");
    }
    mutate();
    setRefresh(!refresh);
  }

  const renderCell = useCallback((rec: Rec, columnKey: React.Key) => {
    const cellValue = rec[columnKey as keyof Rec];

    if (columnKey === "action") {
      return (
        <div className="relative flex items-center justify-center gap-4">
          <Tooltip content="Details">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EyeIcon
                onClick={() => {
                  setModalRec(rec);
                  setModalType(DETAIL_MODAL);
                  onOpen();
                }}
              />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Delete">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <DeleteIcon
                onClick={() => {
                  //deleteRecord(rec.id);
                  setModalRec(rec);
                  setModalType(DELETE_CONFIRMATION_MODAL);
                  onOpen();
                }}
              />
            </span>
          </Tooltip>
        </div>
      );
    } else if (columnKey === "date") {
      const date: Date = new Date(cellValue);
      const formatedDate = formatDate(date);
      return <> {formatedDate} </>;
    } else {
      return <> {cellValue} </>;
    }
  }, []);

  const onRowsPerPageChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRows(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const topContent = useMemo(() => {
    return (
      <div className="flex w-full justify-between gap-8">
        <Select
          labelPlacement="outside"
          placeholder="Select an operation"
          label="Operation"
          className={"max-w-[200px]"}
          startContent={mathIcons.get(operation || "")?.icon}
          onChange={(e) => setOperation(e.target.value as OperationType)}
        >
          {mathOptions.map((mathOption) => (
            <SelectItem
              startContent={mathIcons.get(mathOption.key)?.icon}
              key={mathOption.key}
            >
              {mathOption.label}
            </SelectItem>
          ))}
        </Select>
        <DatePicker
          className={"max-w-[250px]"}
          hourCycle={24}
          defaultValue={startDate}
          granularity="second"
          label="Start Date"
          labelPlacement="outside"
          onChange={setStartDate}
        />
        <DatePicker
          className={"max-w-[250px]"}
          hourCycle={24}
          defaultValue={endDate}
          granularity="second"
          label="End Date"
          labelPlacement="outside"
          onChange={setEndDate}
        />
      </div>
    );
  }, [data?.totalElements, page, pages, refresh]);

  const bottomContent = useMemo(() => {
    return pages > 0 ? (
      <div className="flex w-full justify-between">
        <span className="flex flex-1 items-center text-default-400 text-small">
          Total: <b className="ml-1"> {data?.totalElements} </b>
        </span>
        <Pagination
          className="flex-2"
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={(page) => setPage(page)}
        />
        <label className="flex justify-end flex-1 items-center text-default-400 text-small">
          <span>Rows:</span>
          <select
            className="bg-transparent outline-none text-default-400 text-small"
            onChange={onRowsPerPageChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </label>
      </div>
    ) : null;
  }, [data?.totalElements, page, pages, refresh]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <TableModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        rec={modalRec}
        modalType={modalType || DETAIL_MODAL}
        handlerDelete={deleteRecord}
      />
      <h1 className="text-3xl mb-6">Records</h1>
      <Table
        className="max-w-[1000px]"
        aria-label="Example table with client async pagination"
        bottomContent={bottomContent}
        topContent={topContent}
        topContentPlacement="outside"
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <TableHeader>
          <TableColumn key="type">TYPE</TableColumn>
          <TableColumn key="userBalance" allowsSorting={true}>
            BALANCE
          </TableColumn>
          <TableColumn key="amount">AMOUNT</TableColumn>
          <TableColumn key="date" allowsSorting={true}>
            DATE
          </TableColumn>
          <TableColumn key="action">ACTIONS</TableColumn>
        </TableHeader>
        <TableBody
          items={sortedItems}
          emptyContent={"No records to display."}
          loadingContent={<Spinner />}
          loadingState={loadingState}
        >
          {(item) => (
            <TableRow key={item?.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </section>
  );
}

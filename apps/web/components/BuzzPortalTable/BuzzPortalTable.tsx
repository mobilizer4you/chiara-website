import React from "react";
import { ProgressBar } from "react-bootstrap";
import { CellProps, Column, useTable, useSortBy } from "react-table";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";

type DataType = {
  symbol: string;
  name: string;
  industry: string;
  newsVolume: number;
};

const TABLE_MOCK_DATA: DataType[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    industry: "Technology",
    newsVolume: 100,
  },
  {
    symbol: "AMZN",
    name: "Amazon Inc.",
    industry: "Retail-Cyclical",
    newsVolume: 65,
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    industry: "Technology",
    newsVolume: 32,
  },
];

const BuzzPortalTable = () => {
  const columns = React.useMemo<Column<DataType>[]>(
    () => [
      {
        Header: "Symbol",
        accessor: "symbol",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Industry",
        accessor: "industry",
      },
      {
        Header: "News Volume",
        Cell: (rows: React.PropsWithChildren<CellProps<DataType>>) => {
          return (
            <div className="cstm-progress">
              <span>{rows.row.original.newsVolume}</span>
              <ProgressBar variant="info" now={rows.row.original.newsVolume} />
            </div>
          );
        },
        accessor: "newsVolume",
      },
    ],
    []
  );
  const data = React.useMemo(() => TABLE_MOCK_DATA, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );
  //
  return (
    <table {...getTableProps()} className="table table-borderless table-cstm">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              // Add the sorting props to control sorting. For this example
              // we can add them into the header props
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                {/* Add a sort direction indicator */}
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <HiArrowUp />
                    ) : (
                      <HiArrowDown />
                    )
                  ) : null}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BuzzPortalTable;

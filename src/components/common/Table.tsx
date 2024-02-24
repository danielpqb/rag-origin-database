"use client";

import { twMerge } from "tailwind-merge";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

function Table({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={twMerge("max-w-7xl m-auto", className)}>
      <div className="flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow ring-1 ring-white ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y">{children}</table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function THead({
  columnNames,
  onClick,
  sortIcon,
}: {
  columnNames: string[];
  onClick?: (columnName: string) => void;
  sortIcon?: { columnName: string; type: "ASC" | "DES" };
}) {
  return (
    <thead className="bg-gray-800">
      <tr>
        {columnNames.map((name, idx) => {
          return (
            <th
              key={idx}
              scope="col"
              className={twMerge(
                "px-3 py-3.5 text-left text-base font-semibold text-gray-100",
                onClick && "cursor-pointer hover:bg-gray-700"
              )}
              onClick={() => {
                onClick && onClick(name);
              }}
            >
              {name}
              {sortIcon?.type === "ASC" && sortIcon?.columnName === name.toLowerCase() && (
                <ChevronDownIcon width={13} />
              )}
              {sortIcon?.type === "DES" && sortIcon?.columnName === name.toLowerCase() && (
                <ChevronUpIcon width={13} />
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

function TBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <tbody
      className={twMerge("divide-y divide-gray-300 bg-gray-200", className)}
    >
      {children}
    </tbody>
  );
}

function Tr({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <tr
      onClick={onClick}
      className={twMerge(
        "bg-gray-200 [&:nth-child(even)]:bg-gray-300/50",
        className
      )}
    >
      {children}
    </tr>
  );
}

function Td({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <td
      className={twMerge(
        "whitespace-nowrap px-3 py-4 text-sm text-gray-900",
        className
      )}
    >
      {children}
    </td>
  );
}

export { Table, TBody, THead, Tr, Td };

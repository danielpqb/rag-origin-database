"use client"

import { twMerge } from "tailwind-merge";

function Table({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge("max-w-7xl m-auto", className)}
    >
      <div className="flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                {children}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function THead({ columnNames }: { columnNames: string[] }) {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columnNames.map((name, idx) => {
          return (
            <th
              key={idx}
              scope="col"
              className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
            >
              {name}
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
    <tbody className={twMerge("divide-y divide-gray-200 bg-white", className)}>
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
      className={className}
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
        "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
        className
      )}
    >
      {children}
    </td>
  );
}

export { Table, TBody, THead, Tr, Td };

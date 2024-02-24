"use client";

import { itemsArray } from "@/data/items";
import { TBody, THead, Table, Td, Tr } from "./common/Table";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import InputText from "./common/InputText";
import InputBoolean from "./common/InputBoolean";
import { TItemAtributes } from "@/types/item";

const columnNameKeys = {
  Name: "name",
  Category: "category",
  Type: "type",
  Description: "description",
} as Record<string, string>;

export function ItemsTable() {
  const [sortBy, setSortBy] = useState("lv");
  const [sortRule, setSortRule] = useState("ASC" as "ASC" | "DES");
  const [filterTerm, setFilterTerm] = useState("");
  const [filterKeys, setFilterKeys] = useState({
    name: true,
    category: true,
    type: true,
    description: true,
  });

  console.log(filterKeys);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <InputText
          label={
            <>
              <MagnifyingGlassIcon width={18} />
              <span className="ml-1">Search</span>
            </>
          }
          onChange={(e) => {
            setFilterTerm(e.target.value);
          }}
        />
        <div className="flex w-full justify-between">
          {Object.keys(columnNameKeys).map((key) => (
            <InputBoolean
              key={key}
              defaultValue={
                filterKeys[columnNameKeys[key] as keyof TItemAtributes]
              }
              label={key}
              onChange={(bool) => {
                setFilterKeys((old) => {
                  return { ...old, [columnNameKeys[key]]: bool };
                });
              }}
            />
          ))}
        </div>
      </div>
      <Table>
        <THead
          sortIcon={{ columnName: sortBy, type: sortRule }}
          onClick={(columnName) => {
            setSortBy(columnNameKeys[columnName]);
            if (sortBy !== columnNameKeys[columnName]) {
              setSortRule("ASC");
            } else {
              switch (sortRule) {
                case "ASC":
                  setSortRule("DES");
                  break;
                case "DES":
                  setSortBy("lv");
                  setSortRule("ASC");
                  break;
              }
            }
          }}
          columnNames={Object.keys(columnNameKeys)}
        />
        <TBody>
          {itemsArray
            .filter((item) => {
              for (const k in item) {
                const key = k as keyof TItemAtributes;
                if (Object.prototype.hasOwnProperty.call(item, key)) {
                  if (
                    filterKeys[key] &&
                    String(item[key]).toLowerCase().includes(filterTerm)
                  ) {
                    return true;
                  }
                }
              }
              return false;
            })
            .sort((a, b) => {
              const aProp = (a as any)[sortBy];
              const bProp = (b as any)[sortBy];

              const type = typeof aProp;

              switch (sortRule) {
                case "ASC":
                  if (type === "string") {
                    return ("" + aProp).localeCompare(bProp);
                  }
                  return aProp - bProp;
                case "DES":
                  if (type === "string") {
                    return ("" + bProp).localeCompare(aProp);
                  }
                  return bProp - aProp;
              }
            })
            .map((item) => {
              return (
                <Tr key={item.name}>
                  {Object.values(columnNameKeys).map((value, idx) => (
                    <Td key={idx}>
                      {`${item[value as keyof TItemAtributes]}`}
                    </Td>
                  ))}
                </Tr>
              );
            })}
        </TBody>
      </Table>
    </div>
  );
}

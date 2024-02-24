"use client";

import { monstersArray } from "@/data/monsters";
import { TBody, THead, Table, Td, Tr } from "./common/Table";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import InputText from "./common/InputText";
import { TMonsterAtributes } from "@/types/monster";
import InputBoolean from "./common/InputBoolean";

const columnNameKeys = {
  Lv: "lv",
  Name: "name",
  Hp: "hp",
  Type: "type",
  Property: "property",
  Size: "size",
  Atk: "atk",
  Def: "def",
  Hit: "hit",
  Matk: "matk",
  Mdef: "mdef",
  Flee: "flee",
} as Record<string, string>;

export function MonstersTable() {
  const [sortBy, setSortBy] = useState("lv");
  const [sortRule, setSortRule] = useState("ASC" as "ASC" | "DES");
  const [filterTerm, setFilterTerm] = useState("");
  const [filterKeys, setFilterKeys] = useState({
    lv: true,
    name: true,
    hp: true,
    type: true,
    property: true,
    size: true,
    atk: true,
    def: true,
    hit: true,
    matk: true,
    mdef: true,
    flee: true,
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
                filterKeys[columnNameKeys[key] as keyof TMonsterAtributes]
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
          {monstersArray
            .filter((monster) => {
              for (const k in monster) {
                const key = k as keyof TMonsterAtributes;
                if (Object.prototype.hasOwnProperty.call(monster, key)) {
                  if (
                    filterKeys[key] &&
                    String(monster[key]).toLowerCase().includes(filterTerm)
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
            .map((monster) => {
              return (
                <Tr key={monster.name}>
                  {Object.values(columnNameKeys).map((value, idx) => (
                    <Td key={idx}>
                      {`${monster[value as keyof TMonsterAtributes]}`}
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

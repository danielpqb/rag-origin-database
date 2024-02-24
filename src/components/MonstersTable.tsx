"use client";

import { monstersArray } from "@/data/monsters";
import { TBody, THead, Table, Td, Tr } from "./common/Table";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import InputText from "./common/InputText";

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
  const [sortBy, setSortBy] = useState("");
  const [sortRule, setSortRule] = useState("ASC" as "ASC" | "DES");
  const [filterTerm, setFilterTerm] = useState("");

  return (
    <div>
      <div>
        <div>
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
                  setSortBy("");
                  break;
              }
            }
          }}
          columnNames={[
            "Lv",
            "Name",
            "Hp",
            "Type",
            "Property",
            "Size",
            "Atk",
            "Def",
            "Hit",
            "Matk",
            "Mdef",
            "Flee",
          ]}
        />
        <TBody>
          {monstersArray
            .filter((monster) => {
              for (const key in monster) {
                if (Object.prototype.hasOwnProperty.call(monster, key)) {
                  if (
                    String((monster as any)[key])
                      .toLowerCase()
                      .includes(filterTerm)
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
                <Tr>
                  <Td>{monster.lv}</Td>
                  <Td>{monster.name}</Td>
                  <Td>{monster.hp}</Td>
                  <Td>{monster.type}</Td>
                  <Td>{monster.property}</Td>
                  <Td>{monster.size}</Td>
                  <Td>{monster.atk}</Td>
                  <Td>{monster.def}</Td>
                  <Td>{monster.hit}</Td>
                  <Td>{monster.matk}</Td>
                  <Td>{monster.mdef}</Td>
                  <Td>{monster.flee}</Td>
                </Tr>
              );
            })}
        </TBody>
      </Table>
    </div>
  );
}

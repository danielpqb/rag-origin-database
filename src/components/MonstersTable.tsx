"use client";

import { monstersArray } from "@/data/monsters";
import { TBody, THead, Table, Td, Tr } from "./common/Table";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import InputText from "./common/InputText";

export function MonstersTable() {
  const [sortBy, setSortBy] = useState("name");
  const [sortRule, setSortRule] = useState("");
  const [filter, setFilter] = useState({
    name: "",
    lv: "",
    hp: "",
    type: "",
    property: "",
    size: "",
    atk: "",
    def: "",
    hit: "",
    matk: "",
    mdef: "",
    flee: "",
  } as Record<string, string>);

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
            onChange={() => {}}
          />
        </div>
      </div>
      <Table>
        <THead
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
                    !String((monster as any)[key])
                      .toLowerCase()
                      .includes(filter[key].toLowerCase())
                  ) {
                    return false;
                  }
                }
              }
              return true;
            })
            .sort((a, b) => {
              return a.atk - b.atk;
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

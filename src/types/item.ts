export type TItemAtributes = {
  name: string;
  category: "Secondary" | "Primary weapon" | "Armor" | "Shoes" | "Cloak" | "Headgear" | "Accessory";
  type: "Card" | "Equipment" | "Etc";
  description: string;
};

export type TItems = Record<string, TItemAtributes>;

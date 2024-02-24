export type TMonsterType =
  | "Plant"
  | "Brute"
  | "Insect"
  | "Formless"
  | "Undead"
  | "Angel"
  | "Fish"
  | "Demon"
  | "Demi-Human"
  | "Dragon";

export type TMonsterProperty =
  | "Water"
  | "Fire"
  | "Earth"
  | "Wind"
  | "Neutral"
  | "Dark"
  | "Shadow"
  | "Undead"
  | "Holy"
  | "Ghost"
  | "Poison";

export type TMonsterSize = "Small" | "Medium" | "Large";

export type TMonsterAtributes = {
  lv: number;
  hp: number;
  type: TMonsterType;
  property: TMonsterProperty;
  size: TMonsterSize;
  atk: number;
  def: number;
  hit: number;
  matk: number;
  mdef: number;
  flee: number;
};

export type TMonsters = Record<string, TMonsterAtributes>;

export const enum StatusType {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "unkown",
}

export type Status = "Alive" | "Dead" | "unknown";

export const enum GenderType {
  MALE = "male",
  FEMALE = "Female",
  GENDERLESS = "genderless",
  UNKNOWN = "unknown",
}

export type Gender =
  | GenderType.MALE
  | GenderType.FEMALE
  | GenderType.GENDERLESS
  | GenderType.UNKNOWN;

// Define the character type
export type Character = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Male" | "Female" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[]; // URLs of episodes
  url: string; // URL of the character
  created: string; // Date the character was created
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents?: string[];
};

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters?: string[];
};

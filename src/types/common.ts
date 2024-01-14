export const enum StatusType {
  ALIVE = "alive",
  DEAD = "dead",
  UNKNOWN = "unknown",
}

export type Status = StatusType.ALIVE | StatusType.DEAD | StatusType.UNKNOWN;

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

export const ADDITION = "ADDITION",
  SUBTRACTION = "SUBTRACTION",
  MULTIPLICATION = "MULTIPLICATION",
  DIVISION = "DIVISION",
  SQUARE_ROOT = "SQUARE_ROOT",
  RANDOM_STRING = "RANDOM_STRING";
export type OperationType =
  | "ADDITION"
  | "SUBTRACTION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SQUARE_ROOT"
  | "RANDOM_STRING";

export type SelectOptions<T> = { key: T; label: string };

export const mathOptions: SelectOptions<OperationType>[] = [
  { key: ADDITION, label: "Addition" },
  { key: SUBTRACTION, label: "Subtraction" },
  { key: MULTIPLICATION, label: "Multiplication" },
  { key: DIVISION, label: "Division" },
  { key: SQUARE_ROOT, label: "Square Root" },
];

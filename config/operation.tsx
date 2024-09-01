import {
  AddIcon,
  DivisionIcon,
  MultiplicationIcon,
  SquareRootIcon,
  SubstractionIcon,
} from "@/components/icons";
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

interface IIcon {
  icon: React.ReactNode;
}

export const mathIcons: Map<string, IIcon> = new Map([
  [ADDITION, { icon: <AddIcon className="mr-2" /> }],
  [SUBTRACTION, { icon: <SubstractionIcon className="mr-2" /> }],
  [MULTIPLICATION, { icon: <MultiplicationIcon className="mr-2" /> }],
  [DIVISION, { icon: <DivisionIcon className="mr-2" /> }],
  [SQUARE_ROOT, { icon: <SquareRootIcon className="mr-2" /> }],
]);

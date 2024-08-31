import { OperationType } from "@/config/operation";
import { UUID } from "crypto";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Ilogin = {
  email: string;
  password: string;
};

export type IUserSession = {
  email: string;
  token: string;
  id: UUID;
  credit: number;
};

export type MathInput = {
  x?: number;
  y?: number;
};

export type GenerateStringInput = {
  number?: number;
  length?: number;
  unique?: boolean;
  upperLetter?: boolean;
  lowerLetter?: boolean;
  digits?: boolean;
};

export type OperationRequest = {
  operationType?: OperationType;
  mathInput?: MathInput;
  generateStringInput?: GenerateStringInput;
};

export type OperationResponse = {
  id: UUID;
  userBalance: number;
  amount: number;
  operationResponse: string;
  operation: {
    type: OperationType;
    cost: number;
  };
  date: Date;
};

export type ErrorResponse = {
  message: string;
  details?: string;
};

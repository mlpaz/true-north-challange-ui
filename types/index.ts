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
};

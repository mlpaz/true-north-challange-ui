import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";
import { IUserSession } from "@/types";
import { cookies } from "next/headers";
import { emptyObj } from "@/utils/object";
import UserOptions from "./UserOptions";
import { ThemeSwitch } from "../ThemeSwitch";

export const Header = () => {
  const cookieStore = cookies();
  const session: IUserSession = JSON.parse(
    cookieStore.get("session")?.value || "{}"
  );
  let fistLetter = "";
  if (session?.email) {
    fistLetter = session?.email?.charAt(0);
  }

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit ml-3">Challenge</p>
          </NextLink>
        </NavbarBrand>
        {!emptyObj(session) && (
          <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        )}
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem className="hidden sm:flex gap-2" as="div">
          <p className="my-auto mr-2">{session?.email}</p>
          <UserOptions fistLetter={fistLetter} />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};

export default Header;

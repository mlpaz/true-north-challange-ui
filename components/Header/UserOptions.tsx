"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { ExitIcon } from "../icons";

import { useRouter } from "next/navigation";

export const UserOptions = ({ fistLetter }: { fistLetter: string }) => {
  const router = useRouter();
  async function singOut() {
    await fetch("/api/logout", {
      method: "POST",
    });
    router.push("/");
  }
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          as="button"
          radius="sm"
          showFallback
          name={`${fistLetter.toUpperCase()}`}
          size="sm"
          className="text-lg"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem
          startContent={<ExitIcon size={20} />}
          key="singOut"
          onClick={singOut}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserOptions;

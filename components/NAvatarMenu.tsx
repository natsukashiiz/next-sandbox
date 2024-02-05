import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { TokenPayload } from "@/api/types";

import NLogoutConfirmModal from "@/components/NLogoutConfirmModal";

export default function App({ payload }: { payload: TokenPayload }) {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          src={payload.image}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">{payload.username}</p>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="logout" color="danger">
          <NLogoutConfirmModal />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

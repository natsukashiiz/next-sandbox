"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "../icons/AcmeLogo";
import NThemeSwitcher from "./NThemeSwitcher";
import { usePathname } from "next/navigation";
import Link from "next/link";

import type { RootState } from "@/stores";
import { loadAuth } from "@/stores/slice/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import NAvatarMenu from "@/components/NAvatarMenu";

export default function NNavbar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAuth());
  }, [dispatch]);

  const token = useSelector((state: RootState) => state.auth.token);
  const payload = useSelector((state: RootState) => state.auth.payload);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  interface menu {
    name: string;
    href: string;
  }

  const mainMenuItems: menu[] = [
    {
      name: "First",
      href: "/first",
    },
    {
      name: "Second",
      href: "/second",
    },
    {
      name: "Third",
      href: "/third",
    },
    {
      name: "Blogs",
      href: "/blogs",
    },
    {
      name: "Counter",
      href: "/counter",
    },
  ];

  const pathname = usePathname();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">NEXT SANDBOX</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {mainMenuItems.map((item, index) => (
          <NavbarItem key={index} isActive={pathname === item.href}>
            <Link color="foreground" href={item.href}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <NThemeSwitcher />
        </NavbarItem>
        {token ? (
          <>
            <NavbarItem>
              {payload && <NAvatarMenu payload={payload} />}
            </NavbarItem>
          </>
        ) : (
          <NavbarItem>
            <Button
              as={Link}
              href="/login"
              size="sm"
              variant="ghost"
              color="primary"
            >
              Login
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

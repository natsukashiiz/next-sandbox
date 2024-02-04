"use client";

import React, { useEffect } from "react";
import { useSwitch, VisuallyHidden, SwitchProps } from "@nextui-org/react";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";
import { useTheme } from "next-themes";

const ThemeSwitch = (props: SwitchProps) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  const { setTheme } = useTheme();

  useEffect(() => {
    isSelected ? setTheme("dark") : setTheme("light");
  }, [isSelected, setTheme]);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
        >
          {isSelected ? <SunIcon /> : <MoonIcon />}
        </div>
      </Component>
    </div>
  );
};

export default function App() {
  const { theme } = useTheme();
  return <ThemeSwitch defaultSelected={theme === "dark"} />;
}

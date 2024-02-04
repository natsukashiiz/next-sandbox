"use client";

import React from "react";

import type { RootState } from "@/stores/index";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/stores/slice/countSlice";
import { Button, Divider, Spacer } from "@nextui-org/react";

export default function Page() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Couter: {count}</h1>
      <Divider />
      <Spacer y={2} />
      <Button color="success" onClick={() => dispatch(increment())}>
        +
      </Button>
      <Spacer y={1} />
      <Button color="danger" onClick={() => dispatch(decrement())}>
        -
      </Button>
    </>
  );
}

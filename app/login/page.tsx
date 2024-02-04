"use client";

import { EyeFilledIcon } from "@/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/icons/EyeSlashFilledIcon";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Divider,
} from "@nextui-org/react";
import Link from "next/link";
import { FormEvent, useState } from "react";

import { login } from "@/api/auth";
import type { ILoginRequest } from "@/api/types";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ILoginRequest>({
    username: "",
    password: "",
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await login(form);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
      } else {
        console.log(res);
      }
    } catch (error: any) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <Card className="max-w-[400px] mx-auto">
      <CardHeader>Login</CardHeader>
      <CardBody>
        <form onSubmit={handleLogin} className="flex flex-col gap-2">
          <Input
            isRequired
            label="email"
            variant="bordered"
            placeholder="Enter your email"
            onChange={(e) =>
              setForm({ username: e.target.value, password: form.password })
            }
          ></Input>
          <Input
            isRequired
            label="password"
            variant="bordered"
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            onChange={(e) =>
              setForm({ username: form.username, password: e.target.value })
            }
          ></Input>
          <Button color="primary" type="submit" isLoading={loading}>
            Login
          </Button>
        </form>
        <Divider className="my-3" />
        <div className="flex justify-end">
          <Link href="/sign-up">Sign up</Link>
        </div>
      </CardBody>
    </Card>
  );
}

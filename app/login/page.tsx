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
import { ChangeEvent, FormEvent, useState } from "react";

import { login } from "@/api/auth";
import type { ILoginRequest } from "@/api/types";

import { loginAuth } from "@/stores/slice/authSlice";
import { useDispatch } from "react-redux";
import { useSearchParams, useRouter } from "next/navigation";

import axios from "axios";

import toast from "react-hot-toast";

export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const params = useSearchParams();

  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ILoginRequest>({
    username: "kminchelle",
    password: "0lelplR",
    expiresInMins: 1,
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await login(form);
      if (res.status === 200) {
        dispatch(loginAuth(res.data.token));
        router.push(params.get("redirect") || "/");
      } else {
        console.log(res);
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      } else {
        console.error(error);
      }
    }
    setLoading(false);
  };

  return (
    <Card className="max-w-[400px] mx-auto mt-20">
      <CardHeader>Login</CardHeader>
      <CardBody>
        <form onSubmit={handleLogin} className="flex flex-col gap-2">
          <Input
            name="username"
            isRequired
            label="username"
            variant="bordered"
            placeholder="Enter your username"
            onChange={handleChangeForm}
            defaultValue={form.username}
          ></Input>
          <Input
            name="password"
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
            onChange={handleChangeForm}
            defaultValue={form.password}
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

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import type { IPost } from "@/api/types";
import Link from "next/link";
import NPostModal from "@/components/NPostModal";

export default function App({ post, popup }: { post: IPost; popup: boolean }) {
  return (
    <Card className="max-w-[750px] mx-auto">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              USER{post.userId}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              <Link href={`/profile/${post.userId}`}>@user{post.userId}</Link>
            </h5>
          </div>
        </div>
        {popup && <NPostModal post={post} />}
      </CardHeader>
      <CardBody>
        <p>{post.body}</p>
        <span className="pt-2">
          #NextSandbox
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}

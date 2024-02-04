"use client";

import React, { useState, useEffect } from "react";
import type { IPost, IPostResponse } from "@/api/types";

import NPostCard from "@/components/NPostCard";

export default function App({ params }: { params: { userId: number } }) {
  const [data, setData] = useState<IPost[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://dummyjson.com/posts/user/" + params.userId
      );
      const data = (await response.json()) as IPostResponse;
      setData(data.posts);
    }
    fetchData();
  }, [params.userId]);

  return (
    <div className="gap-2 grid grid-cols-1">
      {data.map((item, index) => (
        <NPostCard key={index} post={item} popup={false} />
      ))}
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import type { IPost } from "@/api/types";

import { getPosts } from "@/api/blog";

import NPostCard from "@/components/NPostCard";

export default function App() {
  const [data, setData] = useState<IPost[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getPosts();
        if (res.status === 200) {
          setData(res.data.posts);
        }
      } catch (err: any) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="gap-2 grid grid-cols-1">
      {data.map((item, index) => (
        <NPostCard key={index} post={item} popup={true} />
      ))}
    </div>
  );
}

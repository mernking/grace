import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ data }) {
  return (
    <div className="w-full bg-accent rounded-lg p-2 flex gap-2 flex-col justify-center items-center">
      <Image
        alt={data.alt}
        src={data.image}
        className="w-[100px] h-full"
        width={100}
        height={100}
      />
      <h3 className="text-2xl font-bold capitalize">{data.title}</h3>
      <p className="text-[13px]">{data.content}</p>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ data }) {
  return (
    <div className="w-full shadow-secondary shadow-xl border border-accent rounded-lg p-2 flex gap-2 flex-col justify-center items-center">
      <Image
        alt={data.alt}
        src={data.image}
        className="w-[50px] h-auto rounded-full bg-accent p-2"
        width={50}
        height={50}
      />
      <h3 className="text-2xl font-bold capitalize">{data.title}</h3>
      <p className="text-[13px]">{data.content}</p>
    </div>
  );
}

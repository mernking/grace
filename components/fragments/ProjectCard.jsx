import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ data }) {
  if (!data) {
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-5 p-3 bg-accent rounded-md">
      <Image
        className="w-[400px] aspect-square object-center object-cover rounded-md"
        alt="project image 1"
        src={data.image}
        width={100}
        height={100}
      />
      <div className="w-full flex flex-col gap-3">
        <h3 className="text-2xl font-bold capitalize">{data.title}</h3>
        <p className="text-[13px] line-clamp-3">{data.description}</p>
        <div className="w-full flex flex-wrap gap-3">
          {data?.tags.map((tag, index) => (
            <button
              key={index}
              className="border rounded-full px-3 py-1 text-sm"
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="w-full">
          <Link href={data.url}>
            <p className="font-bold underline">view project</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

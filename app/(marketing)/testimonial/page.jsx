import React from "react";
import Image from "next/image";

export default function page() {
  const testimonyData = [
    {
      image: "/demo.png",
      name: "demo name",
      country: "demo state",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non augue vel est fermentum efficitur. Sed in lacus vel lorem posuere imperdiet. Curabitur dapibus, nisl vel malesu",
    },
    {
      image: "/demo.png",
      name: "demo name",
      country: "demo state",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non augue vel est fermentum efficitur. Sed in lacus vel lorem posuere imperdiet. Curabitur dapibus, nisl vel malesu",
    },
    {
      image: "/demo.png",
      name: "demo name",
      country: "demo state",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non augue vel est fermentum efficitur. Sed in lacus vel lorem posuere imperdiet. Curabitur dapibus, nisl vel malesu",
    },
    {
      image: "/demo.png",
      name: "demo name",
      country: "demo state",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non augue vel est fermentum efficitur. Sed in lacus vel lorem posuere imperdiet. Curabitur dapibus, nisl vel malesu",
    },
    {
      image: "/demo.png",
      name: "demo name",
      country: "demo state",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non augue vel est fermentum efficitur. Sed in lacus vel lorem posuere imperdiet. Curabitur dapibus, nisl vel malesu",
    },
    {
      image: "/demo.png",
      name: "demo name",
      country: "demo state",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non augue vel est fermentum efficitur. Sed in lacus vel lorem posuere imperdiet. Curabitur dapibus, nisl vel malesu",
    },
    {
      image: "/demo.png",
      name: "demo name",
      country: "demo state",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non augue vel est fermentum efficitur. Sed in lacus vel lorem posuere imperdiet. Curabitur dapibus, nisl vel malesu",
    },
    {
      image: "/demo.png",
      name: "demo name",
      country: "demo state",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non augue vel est fermentum efficitur. Sed in lacus vel lorem posuere imperdiet. Curabitur dapibus, nisl vel malesu",
    },
    {
      image: "/demo.png",
      name: "demo name",
      country: "demo state",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non augue vel est fermentum efficitur. Sed in lacus vel lorem posuere imperdiet. Curabitur dapibus, nisl vel malesu",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-3 p-2">
      <h1 className="font-bold capitalize text-3xl text-center">testimonial</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonyData.map((data, index) => (
          <div
            key={index}
            className="w-full flex flex-col gap-2 bg-accent p-2 rounded-md"
          >
            <div className="w-full flex flex-row gap-2 justify-center items-end">
              <Image
                className="rounded-full aspect-square object-center object-cover"
                src={data.image}
                width={100}
                height={100}
              />
              <div className="w-full flex flex-col gap-1">
                <h1 className="text-2xl font-bold">{data.name}</h1>
                <p>{data.country}</p>
              </div>
            </div>
            <div className="w-full text-sm">
              <p>{data.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

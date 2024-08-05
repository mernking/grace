import React from "react";
import Image from "next/image";


export default function page() {
  return (
    <div className="flex flex-col gap-2">
      <div className="title">
        <h1 className="font-grace text-center">About us</h1>
      </div>
      <div className="overflow-hidden rounded-lg">
        <Image
          className=""
          src="/portfolio/test.jpg"
          alt="image"
          width="200"
          height="300"
          layout="responsive"
        />
      </div>
      <div className="aboutsection py-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officia
          tempore alias, nostrum assumenda quisquam necessitatibus placeat
          beatae pariatur expedita molestias deserunt reprehenderit ab
          recusandae voluptatum maxime. Veritatis, tempora ullam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officia
          tempore alias, nostrum assumenda quisquam necessitatibus placeat
          beatae pariatur expedita molestias deserunt reprehenderit ab
          recusandae voluptatum maxime. Veritatis, tempora ullam?
        </p>
      </div>
    </div>
  );
}

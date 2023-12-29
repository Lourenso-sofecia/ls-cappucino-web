"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Interface para representar os dados de um produto
interface CardProductProps {
  image: StaticImageData;
  name: string;
  price: number;
}

export function Card({ image, name, price }: CardProductProps) {
  return (
    <Link href={"/"} className="flex flex-col bg-white bg-opacity-40 rounded-bl rounded-br backdrop-blur-[20px]">
      <Image
        className="w-full rounded-tl rounded-tr"
        src={image}
        alt={name}
        width={256}
        height={300}
      />
      <div className="flex flex-col gap-2 px-3 py-2">
        <h2 className="text-zinc-700 text-base font-light font-['Saira'] leading-normal">
          {name}
        </h2>
        <div className=" h-[2px] bg-gray-200" />
        <p className="text-zinc-950 text-sm font-semibold font-['Saira'] leading-[21px]">
          Price: ${price}
        </p>
      </div>
    </Link>
  );
}

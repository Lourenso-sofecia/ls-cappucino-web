import Image from "next/image";

import goback from "@/assets/goback.png";
import Link from "next/link";

export function Header(){

    return (
        <Link href={"/"} className="flex items-center py-6 gap-2 ">
            <Image
              className=" cursor-pointer"
              src={goback}
              alt={"goback img"}
              width={24}
              height={24}
            />
            <p className="text-gray-500 text-sm font-medium font-sans leading-[21px]">Voltar</p>
        </Link>
    )
}
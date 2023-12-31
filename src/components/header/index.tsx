import Image from "next/image";

import logo from "@/assets/logo.png";

import search from "@/assets/search.png";

import shopping from "@/assets/shopping.png";

export function Header() {
  return (
    <header className="flex items-center justify-between px-[160px] py-5">
      <h2 className="text-3xl text-zinc-800 font-sans">LSML COMPRE AQUI</h2>
      {/*<Image className="b border" src={logo} alt="arrow down" width={100} height={100} />*/}
      <div className="flex items-center gap-6">
        <div className="w-[352px]  relative  justify-between  items-center gap-[90px] flex">
          <input
            placeholder="Procurando por algo específico?"
            className="w-full pl-4 pr-12 py-[9px] bg-gray-100 rounded-lg text-zinc-500 text-sm font-normal font-sans leading-snug"
          />
          <div className="absolute right-4">
            <Image
              className=" "
              src={search}
              alt={"search img"}
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="relative pr-1.5">
            <Image
              className=" "
              src={shopping}
              alt={"shopping img"}
              width={24}
              height={24}
            />
            <div className="absolute right-[1px] top-[17px] flex items-center justify-center rounded-full w-4 h-4 bg-red-600">
                <p className="text-white text-[10px]">2</p>
            </div>
        </div>
      </div>
    </header>
  );
}

"use client";
import Image from "next/image";
import { useState } from "react";
import arrow_down from "@/assets/arrow-down.png";

export function Header() {
  const [isActiveTodos, setIsActiveTodos] = useState(true);
  const [isActiveCamisetas, setIsActiveCamisetas] = useState(false);
  const [isActiveCanecas, setIsActiveCanecas] = useState(false);

  function changeFilter(type: string) {
    // Verifica o tipo de botão clicado e atualiza os estados correspondentes
    if (type === "todos") {
      setIsActiveTodos(true);
      setIsActiveCamisetas(false);
      setIsActiveCanecas(false);
    } else if (type === "camisetas") {
      setIsActiveTodos(false);
      setIsActiveCamisetas(true);
      setIsActiveCanecas(false);
    } else if (type === "canecas") {
      setIsActiveTodos(false);
      setIsActiveCamisetas(false);
      setIsActiveCanecas(true);
    }
  }
  return (
    <header className="flex justify-between items-center">
      <article className="flex gap-10">
        <div className="flex flex-col gap-1">
          <button
            onClick={() => changeFilter("todos")}
            className={`text-base font-normal font-['Saira'] uppercase leading-snug ${
              isActiveTodos ? "text-zinc-900" : "text-zinc-500"
            }`}
          >
            Todos os produtos{" "}
          </button>

          {isActiveTodos && <div className=" h-1 bg-orange-300" />}
        </div>
        <div className="flex flex-col gap-1">
          <button
            onClick={() => changeFilter("camisetas")}
            className={`text-base font-normal font-['Saira'] uppercase leading-snug ${
              isActiveCamisetas ? "text-zinc-900" : "text-zinc-500"
            }`}
          >
            Camisetas{" "}
          </button>
          {isActiveCamisetas && <div className=" h-1 bg-orange-300" />}
        </div>
        <div className="flex flex-col gap-1">
          <button
            onClick={() => changeFilter("canecas")}
            className={`text-base font-normal font-['Saira'] uppercase leading-snug ${
              isActiveCanecas ? "text-zinc-900" : "text-zinc-500"
            }`}
          >
            Canecas{" "}
          </button>
          {isActiveCanecas && <div className=" h-1 bg-orange-300" />}
        </div>
      </article>
      <article className="flex items-center justify-center gap-2">
        <p className="text-zinc-500 text-base font-normal font-['Saira'] leading-snug">
          Organizar por
        </p>
        <Image src={arrow_down} alt="arrow down" width={24} height={24} />
      </article>
    </header>
  );
}

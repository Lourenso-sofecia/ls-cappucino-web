import Image from "next/image";

import canecaDetails from "@/assets/canecaDetails.png";

import shoppingbtn from "@/assets/shopping-btn.png";

export function DetailsComponent() {
  return (
    <section className="lg:flex grid gap-8">
      <article className="flex ">
        <Image
          className=" rounded-lg"
          src={canecaDetails}
          alt={"canecaDetails img"}
          width={640}
          height={580}
        />
      </article>

      <article className="flex flex-col justify-between w-full lg:w-[450px] lg-gap-0 gap-10">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col">
            <p className="text-zinc-700 text-base font-normal font-sans leading-normal">
              Caneca
            </p>

            <h2 className="pt-3 pb-1 text-zinc-700 text-[32px] font-light leading-[48px]">
              Caneca de cerâmica rústica
            </h2>

            <p className="text-zinc-950 text-xl font-semibold leading-[30px]">
              $ 40,00
            </p>
            <p className="pt-6 text-zinc-700 text-xs font-normal leading-[18px]">
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-zinc-500 text-base font-medium uppercase leading-normal">
              DESCRIÇÃO
            </h3>
            <p className="text-zinc-700 text-sm font-normal leading-[21px]">
              Aqui vem um texto descritivo do produto, esta caixa de texto
              servirá apenas de exemplo para que simule algum texto que venha a
              ser inserido nesse campo, descrevendo tal produto.
            </p>
          </div>
        </div>

        <button className="flex items-center justify-center gap-3 w-full h-10 bg-sky-800 rounded hover:opacity-80">
          <Image
            className=" "
            src={shoppingbtn}
            alt={"shoppingbtn img"}
            width={24}
            height={24}
          />
          <p className="text-center text-slate-100 text-base font-medium uppercase leading-normal">
            Adicionar ao carrinho
          </p>
        </button>
      </article>
    </section>
  );
}

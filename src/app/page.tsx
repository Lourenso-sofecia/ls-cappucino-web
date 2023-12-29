import { Card } from '@/components/card';
import { Header } from '@/components/headerHome'
import Image from 'next/image'


import caneca from "@/assets/caneca.png";

export default function Home() {

  // Criando um array com 12 elementos apenas para fins de repetição
  const products = Array.from({ length: 12 }, (_, index) => index + 1);



  return (
    <main className="flex flex-col bg-gray-100 px-4 lg:px-10 xl:px-[160px] pt-8 pb-[160px]">
      <Header />
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-8 pt-20'>
        {
          products.map((item:any, index) => {
            return (
              <Card key={index} name='Teste' image={caneca} price={200} />
            )
          })
        }
      </section>

    </main>
  )
}

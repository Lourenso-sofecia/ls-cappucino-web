import { DetailsComponent } from "@/components/detailsComponent";
import { Header } from "@/components/headerDetails";

export default function Details() {

  return (
    <main className="flex flex-col bg-gray-100 px-4 lg:px-10 xl:px-[160px]  pb-[160px]">
      <Header />

      <DetailsComponent />

      
    </main>
  );
}

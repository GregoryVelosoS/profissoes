import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar.tsx";

export default function Home() {
  return (
    <div className="h-screen bg-[#222fe6] pt-10">
      <main className="w-full flex items-center justify-center">
        <div className="min-w-full md:min-w-5xl flex items-center justify-center flex-col gap-4 px-4">
          <header className="w-full">
           <TopBar />
          </header>
          <div className="text-white space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-8xl max-w-[530px] leading-tight sm:leading-10 md:leading-24">
              <span className="font-bold">
                O QUE
                <br/> 
                EU
                <br/>
                GANHO
              </span>{" "}
              Com isso?
            </h1>
            <Link
              className="bg-[#fd7b01] rounded-full p-4 text-xl sm:text-2xl font-bold block text-center mt-4"
              to={"/profissoes/profissoes"}
            >
              Descubra
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

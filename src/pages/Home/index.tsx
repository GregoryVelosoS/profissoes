import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen bg-[#222fe6] pt-10">
      <main className="w-full flex items-center justify-center">
        <div className="min-w-full md:min-w-5xl flex items-center justify-center flex-col gap-4 px-4">
          <header className="w-full">
            <div className="flex w-full items-center gap-4">
              <div className="w-16 h-12 border-2 border-[#fd7b01]"></div>
              <h1 className="text-white text-center text-xl sm:text-3xl md:text-4xl">
                Profissão
              </h1>
              <div className="border-2 border-[#fd7b01] w-full"></div>
              <h2 className="text-white text-center text-sm sm:text-xl font-semibold max-w-[120px] sm:max-w-[85px]">
                SENAI NO SEU FUTURO
              </h2>
            </div>
          </header>
          <div className="text-white space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-8xl max-w-[430px] leading-tight sm:leading-10 md:leading-24">
              <span className="font-bold">O QUE EU GANHO</span> Com isso?
            </h1>
            <Link
              className="bg-[#fd7b01] rounded-full p-4 text-xl sm:text-2xl font-bold block text-center mt-4"
              to={"/profissoes"}
            >
              Descubra
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

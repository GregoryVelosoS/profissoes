import { Link } from "react-router-dom";

export default function Final() {
  return (
    <div className="h-screen bg-[#222fe6] pt-10">
      <main className="w-full flex items-center justify-center">
        <div className="min-w-full md:min-w-5xl flex items-center justify-center flex-col gap-4 px-4">
          <header className="w-full">
            <div className="flex w-full items-center gap-4">
              <div className="w-16 h-12 border-2 border-[#fd7b01]"></div>
              <h1 className="text-white text-center text-xl sm:text-3xl md:text-4xl red-font">
                Profissão
              </h1>
              <div className="border-2 border-[#fd7b01] w-full"></div>
              <h2 className="text-white text-center text-sm sm:text-xl font-semibold max-w-[120px] sm:max-w-[85px]">
                SENAI NO SEU FUTURO
              </h2>
            </div>
          </header>

          <div className="w-full flex items-start justify-start">
            <div className="text-white space-y-4">
              <h1 className="text-9x1 sm:text-5xl md:text-9xl min-w-[700px] leading-6 sm:leading-10 md:leading-30 red-font">
                Seu futuro 
                <br></br>
                te espera 
                <br></br>
                no Senai
              </h1>
            </div>
            <div className="text-white space-y-4">
              <Link
                className="rounded-full p-4 text-xl sm:text-2xl text-white underline red-font font-bold block text-center mt-4"
                to={"/"}
              >
                Recomecar
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

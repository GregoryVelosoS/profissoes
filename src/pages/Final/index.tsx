import { Link } from "react-router-dom";
import { TbArrowBack } from "react-icons/tb";
import { CiInstagram } from "react-icons/ci";

export default function Final() {
  return (
    <div className="min-h-screen bg-[#222fe6] pt-10">
      <main className="w-full flex items-center justify-center">
        <div className="max-w-screen-lg w-full flex items-center justify-center flex-col gap-4 px-4">
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

          <main className="w-full">
            <div className="w-full">
              <div className="flex items-center justify-between flex-col md:flex-row gap-6 md:gap-0">
                <h1 className="text-4xl sm:text-6xl md:text-8xl text-white max-w-[450px] leading-12 md:leading-28 text-center md:text-left">
                  Seu futuro te espera no Senai
                </h1>
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <TbArrowBack color="#fff" size={40} />
                    <Link className="text-2xl text-white underline" to={"/"}>
                      Recomeçar
                    </Link>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <a href="">
                      <CiInstagram color="#fff" size={40} />
                    </a>
                    <a href="">
                      <CiInstagram color="#fff" size={40} />
                    </a>
                    <a href="">
                      <CiInstagram color="#fff" size={40} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </main>
    </div>
  );
}

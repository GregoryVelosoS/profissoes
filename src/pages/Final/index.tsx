import { Link } from "react-router-dom";
import { TbArrowBack } from "react-icons/tb";
import { CiDesktop, CiFacebook, CiInstagram, CiYoutube,  } from "react-icons/ci";

import TopBar from "@/components/TopBar.tsx";

export default function Final() {
  return (
    <div className="min-h-screen bg-[#222fe6] pt-10">
      <main className="w-full flex items-center justify-center ">
        <div className="max-w-screen-lg w-full flex items-center justify-center flex-col gap-4 px-4">
          <header className="w-full">
           <TopBar />
          </header>

          <main className="w-full">
            <div className="w-full">
              <div className="flex items-center justify-between flex-col md:flex-row gap-6 md:gap-0">
                <h1 className="text-4xl sm:text-6xl md:text-9xl text-white max-w-[600px] leading-12 md:leading-28 text-center md:text-left red-font">
                  Seu futuro te espera no Senai
                </h1>
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center gap-3 justify-center  md:justify-start">
                    <TbArrowBack color="#fff" size={40} />
                    <Link className="text-2xl text-white underline" to={"/profissoes/inicio"}>
                      Recomeçar
                    </Link>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <a href="https://www.instagram.com/senaivitoria/">
                      <CiInstagram color="#fff" size={40} />
                    </a>
                    <a href="https://www.youtube.com/@SENAIES_Oficial">
                      <CiYoutube color="#fff" size={40} />
                    </a>
                    <a href="https://pt-br.facebook.com/SenaiES/">
                      <CiFacebook color="#fff" size={40} />
                    </a>
                    <a href="https://senaies.com.br/">
                      <CiDesktop color="#fff" size={40} />
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

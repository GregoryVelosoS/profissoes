import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar.tsx";
import {useEffect} from "react";

export default function Home() {

  const enterFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.requestFullscreen) { /* Safari */
      elem.requestFullscreen();
    } else if (elem.requestFullscreen) { /* IE11 */
      elem.requestFullscreen();
    }
  };

  useEffect(() => {
    enterFullscreen();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#222fe6] pt-10">
      <main className="w-full flex items-center justify-center">
        <div className="min-w-full md:min-w-5xl flex items-center justify-center flex-col gap-4 px-4">
          <header className="w-full not-sm:mt-10 ">
           <TopBar />
          </header>
          <div className="text-white space-y-4">
            <h1 className="text-7xl sm:text-5xl md:text-8xl max-w-[530px] leading-tight sm:leading-10 md:leading-24">
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

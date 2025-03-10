import { useEffect, useState } from "react";
import { ListaProfissoes } from "../../types/profissoes";

export default function Profissoes() {
  const [profissoes, setProfissoes] = useState<ListaProfissoes | null>(null);

  useEffect(() => {
    renderizarProfissoes();
  }, []);

  const renderizarProfissoes = async () => {
    try {
      const response = await fetch("/data/profissoes.json");

      if (!response.ok) {
        throw new Error("Erro ao puxar dados");
      }

      const json = await response.json();

      setProfissoes(json);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex items-center justify-center min-h-screen px-4">
      <div className="w-full pt-8">
        <header className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <h1 className="font-bold text-[#003c64] leading-tight text-4xl md:text-6xl">
            <span className="font-normal">Qual</span> Sua <br className="hidden md:block" /> Profissão?
          </h1>
          <h2 className="text-[#003c64] text-lg md:text-xl mt-4 md:mt-0">
            MARQUE A OPÇÃO QUE MELHOR SE <br className="hidden md:block" /> ENCAIXA AO SEU
            <span className="font-bold"> ATUAL EMPREGO</span>
          </h2>
        </header>

        <main className="mt-12">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
            {profissoes?.paginas
              .find((pagina) => pagina.pagina === 1)
              ?.profissoes.map((profissao, index) => (
                <li
                  className="bg-[#fd7b01] hover:bg-orange-400 transition-colors text-center text-white p-3 rounded-full cursor-pointer text-lg md:text-xl"
                  key={index}
                >
                  {profissao}
                </li>
              ))}
          </ul>

          <ul className="flex items-center w-full justify-center gap-3 mt-12">
            {profissoes?.paginas.map((pagina) => (
              <li
                className="underline font-bold p-3 cursor-pointer text-xl md:text-2xl text-[#003c64]"
                key={pagina.pagina}
              >
                {pagina.pagina}
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}

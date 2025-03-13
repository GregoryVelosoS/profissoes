import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { ListaProfissoes } from "../../types/profissoes";

export default function SalarioFinal() {
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
    <>
      <div className="max-w-5xl mx-auto flex items-center justify-center min-h-screen px-4">
        <div className="w-full pt-8">
          <header className="items-center text-center">
            <h1 className="font-bold text-[#003c64] leading-tight text-4xl md:text-6xl">
              <span className="font-normal">Com</span> Esses Cursos{" "}
              <br className="hidden md:block" />
              Você Pode Ganhar
            </h1>
          </header>

          <main className="mt-2">
            <div className="w-full flex justify-between mt-8">
              {/* Aqui vai o "Botão com a faixa salarial" */}
              <div className="w-full flex items-center justify-center text-center">
                <h1
                  className={
                    "bg-[#fd7b01] rounded-full p-8 text-xl sm:text-4xl font-bold block text-center mt-4 w-1/2 text-white"
                  }
                >
                  Entre 0.000 e 0.000
                </h1>
              </div>
            </div>
            {/* Aqui vai a lista de profissões pra achar esse curso */}
            <h1 className="mt-5 mb-4 text-4xl text-center w-full font-bold text-[#003c64]">
                Profissões na área X{" "}
              </h1>
            <div className="w-full grid grid-cols-2 gap-x-12 gap-y-1">
              {profissoes &&
                profissoes.paginas
                  .find((pagina) => pagina.pagina === 1)
                  ?.profissoes.map((profissao, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between mt-4 "
                    >
                      <p className="text-1xl font-bold text-[#003c64]">
                        {profissao} - R$ 0.000,00
                      </p>
                      <p></p>
                      <br />
                    </div>
                  ))}
            </div>
            <div className="w-full flex justify-between mt-8">
              <Link className="mt-6 text-xl underline font-bold" to="/cursos">
                Voltar
              </Link>
              <Link className="mt-6 text-xl underline font-bold" to="/final">
                Finalizar
              </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

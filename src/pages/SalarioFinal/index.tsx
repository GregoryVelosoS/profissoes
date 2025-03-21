import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { ListaCarreiras } from "../../types/carreiras";
import { SalarioCard } from "@/components/ui/SalarioCard";

export default function SalarioFinal() {
  const indexCurso = Number(localStorage.getItem("indexCurso"));

  const [carreiraEscolhida] = useState(ListaCarreiras[indexCurso]);

  const [salarioEscolhido, setSalarioEscolhido] = useState<{
    min: number;
    max: number;
  } | null>(null);

  function AtualizarSalario() {
    if (carreiraEscolhida && carreiraEscolhida.profissoes.length > 0) {
      const salarios = carreiraEscolhida.profissoes.map(
        (profissao) => profissao.salario
      );
      const minSalario = Math.min(...salarios);
      const maxSalario = Math.max(...salarios);
      setSalarioEscolhido({ min: minSalario, max: maxSalario });
    } else {
      setSalarioEscolhido({ min: 0, max: 0 });
    }
  }
  useEffect(() => {
    AtualizarSalario();
  }, []);

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

          <main className="">
            <div className="w-full flex justify-between">
              {/* Aqui vai o "Botão com a faixa salarial" */}
              <div className="w-full flex items-center justify-center text-center">
                <h1
                  className={
                    "bg-[#fd7b01] rounded-full p-3 text-xl sm:text-xl font-bold block text-center mt-4 md:w-1/2 text-white"
                  }
                >
                  {salarioEscolhido
                    ? `Entre ${salarioEscolhido.min.toLocaleString("pt-BR", {
                        currency: "BRL",
                        style: "currency",
                      })} e ${salarioEscolhido.max.toLocaleString("pt-BR", {
                        currency: "BRL",
                        style: "currency",
                      })}`
                    : "Salário não disponível"}
                </h1>
              </div>
            </div>
            {/* Aqui vai a lista de profissões pra achar esse curso */}
            <h1 className="mt-5 mb-4 text-4xl text-center w-full font-bold text-[#003c64]">
              Profissões na área {carreiraEscolhida.area}{" "}
            </h1>
            <div className="w-full">
              <div className="grid mt-6 gap-x-2 gap-y-1 md:grid-cols-4  sm:text-1xl sm:grid-cols-1 not-sm:text-xs font-bold text-[#003c64]">
                {carreiraEscolhida.profissoes.map((profissao, index) => (
                  <SalarioCard
                    key={index}
                    title={profissao.nome}
                    salary={profissao.salario}
                  />
                ))}
              </div>
            </div>
            <div className="w-full flex justify-between mt-8">
              <Link
                className="mt-6  text-blue-500 text-xl underline font-bold"
                to="/profissoes/cursos"
              >
                Voltar
              </Link>
              <Link
                className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-bold content-center px-6 rounded-lg text-lg"
                to="/profissoes/final"
              >
                Finalizar
              </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

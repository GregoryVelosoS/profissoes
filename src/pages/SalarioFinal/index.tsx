import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { ListaCarreiras } from "../../types/carreiras";

export default function SalarioFinal() {
  const indexCurso = Number(localStorage.getItem("indexCurso"));
  
  // const [listaCarr, setListaCarr] = useState([ListaCarreiras.carreiras]);

  console.log(ListaCarreiras[indexCurso].area);
  // console.log(ListaCarreiras.carreiras.map((carreira) => carreira.TI[0]));
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
              Profissões na área {ListaCarreiras[indexCurso].area}{" "}
            </h1>
            <div className="w-full grid grid-cols-2 gap-x-12 gap-y-1">
              <div>
                {ListaCarreiras.map((categoria, index) => (
                  <div key={index}>
                    <h2>{categoria.area}</h2>
                    <ul>
                      {categoria.profissoes.map((profissao, idx) => (
                        <li key={idx}>
                          {profissao.nome} - Salário: R$
                          {profissao.salario.toLocaleString("pt-BR")}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex justify-between mt-8">
              <Link
                className="mt-6  text-blue-500 text-xl underline font-bold"
                to="/cursos"
              >
                Voltar
              </Link>
              <Link
                className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-bold content-center px-6 rounded-lg text-lg"
                to="/final"
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

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FaixaSalarial() {
  const faixasSalariais = [
    { min: 500.0, max: 1500.0 },
    { min: 1500.0, max: 2500.0 },
    { min: 2500.0, max: 3500.0 },
    { min: 3500.0, max: 4500.0 },
    { min: 4500.0, max: 5500.0 },
    { min: 5500.0, max: 6500.0 },
    { min: 6500.0, max: 7500.0 },
    { min: 7500.0, max: 10000.0 },
    { min: 10000.0, max: 12000.0 },
    { min: 12000.0, max: 14000.0 },
    { min: 14000.0, max: 16000.0 },
    { min: 16000.0, max: 20000.0 },
  ];

  const [salarioEscolhido, setSalarioEscolhido] = useState<{
    min: number;
    max: number;
  } | null>(null);

  const navigate = useNavigate();

  const selecionarSalario = (salario: { min: number; max: number }) => {
    if (
      salarioEscolhido &&
      salarioEscolhido.min === salario.min &&
      salarioEscolhido.max === salario.max
    ) {
      setSalarioEscolhido(null);
      localStorage.removeItem("salarioEscolhido");
    } else {
      setSalarioEscolhido(salario);
      localStorage.setItem("salarioEscolhido", JSON.stringify(salario));
    }
  };

  const avancarParaCurso = () => {
    if (!salarioEscolhido) {
      alert("Por favor, selecione uma faixa salarial antes de avançar.");
      return;
    }
    navigate("/profissoes/cursos");
  };

  return (
    <div className="max-w-5xl mx-auto flex items-center justify-center min-h-screen px-4">
      <div className="w-full pt-8">
        <header className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <h1 className="font-bold text-[#003c64] leading-tight text-4xl md:text-6xl">
            <span className="font-normal">Qual</span> Sua{" "}
            <br className="hidden md:block" /> Faixa Salarial?
          </h1>
          <h2 className="text-[#003c64] text-lg md:text-xl mt-4 md:mt-0">
            MARQUE A OPÇÃO QUE MELHOR SE <br className="hidden md:block" />{" "}
            ENCAIXA AO SEU
            <span className="font-bold"> SALÁRIO ATUAL</span>
          </h2>
        </header>

        <main className="mt-12">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
            {faixasSalariais.map((salario, index) => (
              <li
                key={index}
                onClick={() => selecionarSalario(salario)}
                className={`cursor-pointer text-center text-white p-3 rounded-full text-lg md:text-base transition-all duration-200 ${
                  salarioEscolhido?.min === salario.min &&
                  salarioEscolhido?.max === salario.max
                    ? "bg-green-500 shadow-lg"
                    : "bg-[#222fe6] hover:bg-blue-600"
                }`}
              >
                <h2>
                  Entre{" "}
                  {salario.min.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}{" "}
                  e{" "}
                  {salario.max.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h2>
              </li>
            ))}
          </ul>
          <div className="w-full flex justify-between mt-8">
            <Link
              className="mt-6 text-blue-500 text-xl underline font-bold"
              to="/profissoes/profissoes"
            >
              Voltar
            </Link>

            <button
              onClick={avancarParaCurso}
              className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg text-lg"
            >
              Avançar
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

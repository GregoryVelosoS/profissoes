import { Link } from "react-router-dom";

export default function FaixaSalarial() {
  const faixasSalariais = [
    { min: 1518.0, max: 3000.0 },
    { min: 3000.0, max: 5000.0 },
    { min: 5000.0, max: 7000.0 },
    { min: 7000.0, max: 10000.0 },
    { min: 10000.0, max: 15000.0 },
    { min: 15000.0, max: 20000.0 },
  ];
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
                className="bg-[#222fe6] hover:bg-blue-600 transition-colors text-center text-white p-3 rounded-full cursor-pointer text-lg md:text-base"
                key={index}
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
          <div className="w-full flex justify-center">
            <Link
              className="inline-block text-center text-blue-500 text-xl mt-3 p-2 md:mt-10 md:p-0 underline decoration-blue-500 font-bold"
              to={"/profissoes"}
            >
              Página anterior
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

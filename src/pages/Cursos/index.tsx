import { useEffect, useState } from "react";
import { ListaProfissoes } from "../../types/profissoes";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination"; // Ajuste o caminho conforme necessário
import { Link } from "react-router-dom";
import { ListaCursos } from "@/types/cursos";

export default function Cursos() {
  const [cursos, setCursos] = useState<ListaCursos | null>(null);
  const [paginaAtual, setPaginaAtual] = useState(1);

  useEffect(() => {
    renderizarProfissoes();
  }, []);

  const renderizarProfissoes = async () => {
    try {
      const response = await fetch("/data/cursos.json");

      if (!response.ok) {
        throw new Error("Erro ao puxar dados");
      }

      const json = await response.json();
      setCursos(json);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  };

  const totalPaginas = cursos ? cursos.paginas.length : 0;

  return (
    <div className=" bg-[#222fe6] flex items-center justify-center min-h-screen px-4">
      <div className="w-full pt-8 max-w-5xl mx-auto">
        <header className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <h1 className="font-bold text-white leading-tight text-4xl md:text-6xl">
            <span className="font-normal">Quais</span> Cursos{" "}
            <br className="hidden md:block" /> Você gostaria?
          </h1>
          <h2 className="text-white max-w-96 text-center text-balance text-lg md:text-xl mt-4 md:mt-0">
            MARQUE A OPÇÃO QUE MELHOR SE <br className="hidden md:block" />
            ENCAIXA AOS
            <span className="font-bold">
              {" "}
              cursos que você gostaria de fazer no senai
            </span>
          </h2>
        </header>

        <main className="mt-12">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
            {cursos &&
              cursos.paginas
                .find((pagina) => pagina.pagina === paginaAtual)
                ?.cursos.map((profissao, index) => (
                  <li
                    className="bg-[#fd7b01] hover:bg-orange-400 transition-colors text-center text-white p-3 rounded-full cursor-pointer text-lg md:text-xl"
                    key={index}
                  >
                    {profissao}
                  </li>
                ))}
          </ul>

          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() =>
                    setPaginaAtual(paginaAtual > 1 ? paginaAtual - 1 : 1)
                  }
                  className={
                    paginaAtual === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }
                />
              </PaginationItem>

              {cursos &&
                cursos.paginas.map((pagina) => (
                  <PaginationItem key={pagina.pagina}>
                    <PaginationLink
                      href="#"
                      onClick={() => setPaginaAtual(pagina.pagina)}
                      className={
                        paginaAtual === pagina.pagina
                          ? "font-bold text-blue-600"
                          : ""
                      }
                    >
                      {pagina.pagina}
                    </PaginationLink>
                  </PaginationItem>
                ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    setPaginaAtual(
                      paginaAtual < totalPaginas
                        ? paginaAtual + 1
                        : totalPaginas
                    )
                  }
                  className={
                    paginaAtual === totalPaginas
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>

          <div className="w-full flex justify-center">
            <Link
              className="inline-block text-center text-orange-500 text-xl p-2 md:mt-10 md:p-0 underline decoration-orange-500 font-bold"
              to={"/"}
            >
              Página Inicial
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

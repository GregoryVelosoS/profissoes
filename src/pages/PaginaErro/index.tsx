export default function PaginaErro() {
  return (
    <div className="max-w-5xl mx-auto flex  flex-col items-center justify-center min-h-screen px-4">
      <h1 className="font-bold text-[#003c64] leading-tight text-4xl md:text-6xl">
        <span className="font-normal">404</span> 
      </h1>
      <br />
      <a className="mt-6 block text-orange-500 text-xl underline font-bold" href="/profissoes/">
        Página Inicial
      </a>
    </div>
  );
}

export const SalarioCard = ({
  title,
  salary,
}: {
  title: string;
  salary: number;
}) => (
  <div className="mb-4 overflow-hidden shadow-lg">
    <div className="p-4 border-l-4 border-primary h-full flex flex-col justify-between">
      <h3 className="font-medium text-[12px]">{title}</h3>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-muted-foreground text-base">Salário:</span>
        <span className="font-bold text-base text-primary">
          {salary.toLocaleString("pt-BR", {
            currency: "BRL",
            style: "currency",
          })}
        </span>
      </div>
    </div>
  </div>
);

import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold underline bg-slate-900">
        Finance Manager App
      </h1>
      <p className="text-lg">Bem vindo ao seu app de finanças</p>
      <div className="flex flex-wrap justify-center mt-6">
        <div className="w-full flex-1 p-6 box-sizing:border-box">
          <div className="rounded-md bg-slate-800 p-3">
            <h2 className="text-lg font-bold">Renda</h2>
            <p className="text-gray-600">
              Veja suas receitas e controle seus ganhos.
            </p>
          </div>
        </div>
        <div className="w-full flex-1 p-6 box-sizing:border-box">
          <div className="rounded-md bg-slate-800 p-3">
            <h2 className="text-lg font-bold">Despesas</h2>
            <h1 className="text-gray-600">
              Descubra para onde seu dinheiro está indo. Tenha um controle
              melhor sobre seus gastos.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

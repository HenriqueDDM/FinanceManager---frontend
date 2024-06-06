import { FC, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Form, useLoaderData } from "react-router-dom";
import { IResponseTransactionLoader } from "../types/types";
import CategoryModal from "./CategoryModal";

const TransactionForm: FC = () => {
  const { categories } = useLoaderData() as IResponseTransactionLoader;
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <>
      <div className="rounded-md bg-slate-800 p-4">
        <Form className="grid gap-2" method="post" action="/transactions">
          <label className="grid" htmlFor="title">
            <span>Título</span>
            <input
              className="input border-slate-700"
              type="text"
              placeholder="Título..."
              name="title"
              required
            />
          </label>
          <label className="grid" htmlFor="amount">
            <span>Quantidade</span>
            <input
              className="input border-slate-700"
              type="number"
              placeholder="Quantidade..."
              name="amount"
              required
            />
          </label>

          {/*Select */}
          {categories.length ? (
            <label htmlFor="category" className="grid">
              <span>Categoria</span>
              <select
                className="input border-slate-700"
                name="category"
                required
              >
                {categories.map((ctg, idx) => (
                  <option key={idx} value={ctg.id}>
                    {ctg.title}
                  </option>
                ))}
              </select>
            </label>
          ) : (
            <h1 className=" mt-1 text-red-300">
              Para continuar crie uma categoria
            </h1>
          )}

          {/*Add Category */}
          <button
            onClick={() => setVisibleModal(true)}
            className=" flex max-w-fit items-center gap-2 text-white/50 hover:text-white"
          >
            <FaPlus />
            <span>Gerenciar Categorias</span>
          </button>

          {/*Radio Buttons */}
          <div className="flex gap-4 items-center">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="type"
                value={"income"}
                className="form-radio text-blue-600"
              />
              <span>Renda</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="type"
                value={"expense"}
                className="form-radio text-blue-600"
              />
              <span>Despesa</span>
            </label>
          </div>

          <button className="btn btn-green mt-2 max-w-fit">Enviar</button>
        </Form>

        {/*Add Category */}
        {visibleModal && (
          <CategoryModal type="post" setVisibleModal={setVisibleModal} />
        )}
      </div>
    </>
  );
};

export default TransactionForm;

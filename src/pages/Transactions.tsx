import { FC } from "react";
import TransactionForm from "../components/TransactionForm";
import { instance } from "../api/axios.api";
import { ICategory } from "../types/types";

export const transactionLoader = async () => {
  const categories = await instance.get<ICategory[]>("/categories");

  const data = {
    categories: categories.data,
  };

  return data;
};

export const transactionAction = async ({ request }: any) => {
  const data = {};

  return data;
};

const Transactions: FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-3 items-start gap-4">
        <div className="col-span-2 grid">
          <TransactionForm />
        </div>

        <div className="rounded-md bg-slate-800 p-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-md text-center font-bold uppercase">
                Total Income:
              </p>
              <p className="mt-2 rounded-sm bg-green-600 p-1 text-center">
                1000R$
              </p>
            </div>
            <div>
              <p className="text-md text-center font-bold uppercase">
                Total Expense:
              </p>
              <p className="mt-2 rounded-sm bg-red-500 p-1 text-center">
                1000R$
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className=""></h1>
    </>
  );
};

export default Transactions;

import { FC } from "react";
import { Form } from "react-router-dom";

interface ICategoryModal {
  type: "post" | "patch";
  id?: string;
  setVisibleModal: (visible: boolean) => void;
}

const CategoryModal: FC<ICategoryModal> = ({ type, id, setVisibleModal }) => {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
      <Form
        action="/categories"
        method={type}
        onSubmit={() => setVisibleModal(false)}
        className="grid gap-2 w-[300px] rounded-b-md bg-slate-900 p-5"
      >
        <label htmlFor="title">
          <small>Título Categoria</small>
          <input
            className="input w-full"
            type="text"
            name="title"
            placeholder="Título..."
          />
          <input type="hidden" name="id" value={id} />
        </label>

        <div className="flex items-center gap-2">
          <button className="btn btn-green" type="submit">
            {type === "patch" ? "Salvar" : "Criar"}
          </button>
          <button
            onClick={() => setVisibleModal(false)}
            className="btn btn-red"
          >
            Fechar
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CategoryModal;

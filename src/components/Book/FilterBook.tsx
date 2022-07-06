import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useGetBookStore from "../../store/GetBookStore";

interface Inputs {
  author: string;
  title: string;
}

function FilterBook() {
  const filterUpdate = useGetBookStore((state) => state.filterUpdate);
  const resetAll = useGetBookStore((state) => state.resetAll);
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    filterUpdate(data);
  };

  return (
    <div>
      <h3>Set Filter: </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title : </label>
          <input {...register("title")} />
        </div>
        <div>
          <label>Author: </label>
          <input {...register("author")} />
        </div>
        <button type="submit">Apply</button>
      </form>
      <button onClick={resetAll}>Reset</button>
    </div>
  );
}

export default FilterBook;

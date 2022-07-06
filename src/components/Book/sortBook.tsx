import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useGetBookStore from "../../store/GetBookStore";

interface Inputs {
  author: string;
  title: string;
  year: string;
}

function SortBook() {
  const sortUpdate = useGetBookStore((state) => state.sortUpdate);
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    sortUpdate(data);
  };

  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
        <h3>
          <label>Sort by title :</label>
          <select {...register("title")}>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        </h3>
      </form>
    </div>
  );
}

export default SortBook;

import React from "react";
import useStore from "../../store/AuthStore";
import { ApiService } from "../../api/index.service";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQuery, useMutation } from "react-query";

interface Inputs {
  email: string;
  username: string;
  password: string;
}

function AddAdmin() {
  const logout = useStore((state) => state.logout);

  const { register, handleSubmit } = useForm<Inputs>();

  const {
    mutate: adminRegister,
    data,
  } = useMutation(async (dataForm: Inputs) => {
    return await ApiService.admins.register(dataForm);
  });

  const onSubmit: SubmitHandler<Inputs> = async (dataForm) => {
    adminRegister(dataForm);
  };

  console.log(data);
  return (
    <div>
      <h1>Add admin</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input {...register("email")} />
        </div>
        <div>
          <label>Username:</label>
          <input {...register("username")} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <input type="submit" />
      </form>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}

export default AddAdmin;

import React from "react";
import { ApiService } from "../../api/index.service";
import { useForm, SubmitHandler } from "react-hook-form";
import useStore from "../../store/AuthStore";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

interface Inputs {
  email: string;
  password: string;
}

interface LocationProps {
  state: {
    from: Location;
  };
}

function AdminLogin() {
  const location = useLocation() as LocationProps;
  const from = location.state?.from?.pathname;
  const navigate = useNavigate();
  const login = useStore((state) => state.login);
  const { register, handleSubmit } = useForm<Inputs>();
  const { mutate: adminRegister } = useMutation(
    async (dataForm: Inputs) => {
       await ApiService.admins.login(dataForm);
    },
    {
      onSuccess: () => {
        login();
        if (!from) {
          navigate("/");
        } else {
          navigate(from);
        }
      },
    },
  );

  const onSubmit: SubmitHandler<Inputs> = async (dataForm) => {
    adminRegister(dataForm);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input {...register("email")} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...register("password", { required: true })} />
      </div>
      <input type="submit" />
      <br></br>
      <Link to="/">
        <button>back to homepage</button>
      </Link>
    </form>
  );
}

export default AdminLogin;

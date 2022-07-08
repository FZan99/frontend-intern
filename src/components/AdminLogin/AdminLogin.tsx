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
          navigate("/Homepage");
        } else {
          navigate(from);
        }
      },
    }
  );

  const onSubmit: SubmitHandler<Inputs> = async (dataForm) => {
    adminRegister(dataForm);
  };

  return (
    <div className="bg-[#18A558] w-full h-screen flex flex-col lg:flex-row ">
      <div
        className="flex py-40 flex-col justify-center items-center h-1/3 
        lg:w-3/6 lg:h-full lg:w-2/5 lg:justify-start"
      >
        <h1 className="text-6xl text-white font-bold md:text-7xl">LOGO</h1>
        <p className="py-20 hidden w-4/6 text-center text-2xl text-white font-semibold lg:block">
          Please login with admin account to proceed
        </p>
      </div>
      <div
        className="bg-white w-full py-36 flex flex-col rounded-t-3xl items-center h-4/6
        lg:py-8 lg:justify-center lg:w-2/3 lg:h-full lg:rounded-l-3xl lg:rounded-tr-none lg:w-3/4 "
      >
        <h1 className="text-4xl text-[#116530] font-bold md:text-4xl">
          Admin Login
        </h1>

        <div className="py-16  px-8 md: w-5/6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-2xl font-semibold ">Email</label>
              <input
                {...register("email")}
                className=" border w-full bg-[#A3EBB1] h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-2 focus:ring-[#18A558] rounded-md"
              />
            </div>
            <div>
              <label className="text-2xl font-semibold ">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                className=" border bg-[#A3EBB1] w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-2 focus:ring-[#18A558] rounded-md"
              />
            </div>
            <div className="flex justify-between items-baseline">
              <input
                type="submit"
                className="mt-4 bg-[#116530] text-white py-2 px-6 rounded-lg"
              />
              <Link to="/">
                <button className="text-2xl font-semibold ">Back</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;

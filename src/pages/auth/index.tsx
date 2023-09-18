import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import axiosInstance from "@/utils/helpers/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

import { Navbar } from "@/components/Navbar";
import { ButtonSuccess } from "@/components/atoms/button";

type Inputs = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
};

function UserSignUp() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const notify = () => toast.success("User created successfully");
  const error_notify = () => toast.error("An error occured!")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    try{
      setIsLoading(true)

      const response = await axiosInstance.post(
      "users/",
      {
        username: data.username,
        email: data.email,
        password: data.password,
        password2: data.confirm_password,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    notify();
    } catch(error){
    console.log("err", error);
    error_notify()

    } finally{
      setIsLoading(false)
    }
  
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="flex justify-center flex-col m-auto h-screen shadow-2xl ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" mx-auto w-1/3 p-8 my-12 rounded-lg shadow-2xl">
            <div>
              <h2 className="text-center text-2xl font-bold">
                {" "}
                {t("sign_up")}
              </h2>
            </div>

            <div className="mt-5 mb-4">
              <label htmlFor="username" className="block text-xl mb-2">
                {t("username")}
              </label>
              <input
                type="text"
                id="username"
                disabled={isLoading}
                placeholder="eg:Doe"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("username")}
              />
            </div>

            <div className="mt-5 mb-4">
              <label htmlFor="email" className="block text-xl mb-2">
                {t("email")}
              </label>
              <input
                type="email"
                id="email"
                placeholder="eg:Johnattan@email.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("email")}
              />
            </div>

            <div className="mt-5 mb-4">
              <label htmlFor="password" className="block  text-xl mb-2">
                {t("password")}
              </label>
              <input
                id="password"
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:shadow-outline"
                type="password"
                placeholder="****************"
                {...register("password")}
              />
              {/* <p className="text-blue-800 italic">{t("please_choose_a_password")}</p> */}
            </div>

            <div className="mt-5 mb-2">
              <label htmlFor="confirm_password" className="block text-xl mb-2">
                {t("password_confirmation")}
              </label>
              <input
                id="confirm_password"
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:shadow-outline"
                type="password"
                placeholder="****************"
                {...register("confirm_password")}
              />
              {/* <p className="text-blue-800 italic">{t("please_confirm_your_password")}</p> */}
            </div>

            <div className="flex items-right text-right m-auto mb-8 justify-end  ">
              <a className="flex text-right font-bold text-blue-800 " href="#">
                {t("forgot_password")}
              </a>
            </div>

            <div className="flex items-center justify-between">
              <ButtonSuccess label={t("register")} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

export default UserSignUp;

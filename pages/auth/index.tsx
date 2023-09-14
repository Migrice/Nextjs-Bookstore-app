import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";


type Inputs = {
    username:string
    email:string
    password:string
    confirm_password:string
}

function UserSignUp() {

  const { t } = useTranslation()

    const {
        register,
        handleSubmit,
        reset,
        formState:{errors},
    } = useForm<Inputs>()

    const onSubmit:SubmitHandler<Inputs> = (data) => {
      // let item = new User()
      // console.log(data); 

      axios.post('http://127.0.0.1:8000/users/',{
        username:data.username,
        email:data.email,
        password:data.password,
        password2:data.confirm_password
      }).then(function(response){
        console.log(response);
        
      })
      // .catch(function(error){
      //   console.log(error);
      // })

      reset()}
    
  return (
    <>
      <div className="flex justify-center flex-col m-auto h-screen">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-red-500 mx-auto w-1/3 p-8 my-12 rounded-lg shadow-2xl">
            <div>
              <h2 className="text-center text-2xl font-bold"> Sign Up</h2>
            </div>

            

            <div className="mt-5 mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-xl font-bold mb-2"
              >
                {t("username")}
              </label>
              <input
                type="text"
                id="username"
                placeholder="eg:Doe"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("username")}/>
            </div>

            <div className="mt-5 mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-xl font-bold mb-2"
              >
                {t('email')}
              </label>
              <input
                type="email"
                id="email"
                placeholder="eg:John@email.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("email")}/>
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-xl font-bold mb-2"
              >
                {t('password')}
              </label>
              <input
                id="password"
                className="shadow appearance-none  border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline"
                type="password"
                placeholder="****************"
                {...register("password")}
              />
              <p className="text-red-500 italic">Please choose a password.</p>
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirm_password"
                className="block text-gray-700 text-xl font-bold mb-2"
              >
                Password Confirm
              </label>
              <input
                id="confirm_password"
                className="shadow appearance-none  border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline"
                type="password"
                placeholder="****************"
                {...register("confirm_password")}
              />
              <p className="text-red-500 italic">Please confirm a password.</p>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 font-bold rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {" "}
                Sign Up
              </button>
              <a
                className="inline-block align-baseline font-bold text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </form>
      </div>

      
    </>
  );
}

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, [
//         'common',
//         'footer',
//       ])),
//     },
//   }
// }
export default UserSignUp;

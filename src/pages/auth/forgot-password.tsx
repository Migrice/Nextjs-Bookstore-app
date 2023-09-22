import { Navbar } from "@/components/Navbar"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ToastContainer } from "react-toastify"


export default function ForgotPassword(){
    return(
        <>
        <Navbar/>
        <ToastContainer/>
        
        <div className=" flex justify-center flex-col shadow-2xl m-auto h-screen">

            <form action="">

                <div className="mx-auto w-1/3 p-8 my-12 rounded-lg shadow-xl">

                    <figure className=" bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">

                        <img className="w-24 h-24 md:w-48  md:rounded-none rounded-full mx-auto" src="bookstore.jpeg" height={200} width={200} alt="Logo" />

                        <div className="pt-6 md:p-8 text-center md:text-left  space-y-4">
                            <blockquote>
                            <p className="text-lg font-medium">
                                "Tailwing css is the only framework that i've seen scale  "
                            </p>
                        </blockquote>


                        </div>

                        
                    </figure>
            <p>Hello world! </p>

                </div>
            </form>

        </div>
        
        
        
         </>
    )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});
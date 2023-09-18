import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from "~/next-i18next.config";

import type { AppProps } from 'next/app'

function BookStoreApp({Component, pageProps}: AppProps){
    return (
        // <div className='bg-zinc-400'>
            <div className='bg-gray-200'>
            <Component {...pageProps} />
        </div>
    )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props:{
    ...(await serverSideTranslations(locale, [
        'common',
        'footer',]))
  }
})

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, [
//         'common',
//         'footer',
//       ])),
//       // Will be passed to the page component as props
//     },
//   }
// }

export default appWithTranslation(BookStoreApp, nextI18NextConfig)


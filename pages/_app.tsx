import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from "../next-i18next.config.js";

import type { AppProps } from 'next/app'

function BookStoreApp({Component, pageProps}: AppProps){
    return (
        // <div className='bg-zinc-400'>
            <div>
            <Component {...pageProps} />
        </div>
    )
}


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'footer',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default appWithTranslation(BookStoreApp,nextI18NextConfig)
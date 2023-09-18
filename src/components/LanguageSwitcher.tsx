import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export function LanguageSwitcher() {
  const router = useRouter();
  const {t} = useTranslation()

  const changeLocale = () => {
  if (router.locale == 'en'){
    router.push( `${router.asPath}`, undefined, {shallow:false, locale:'fr'})

  }else{
        router.push( `${router.asPath}`, undefined, {shallow:false, locale:'en'})

  }
    }
  return (
    <>
    <button className="text-black  hover:bg-green-950 border border border-neutral-400 mx-2 px-2  font-bold full mr-8" onClick={changeLocale}>
      {t("change_language")}
    </button>
    </>
  );
}

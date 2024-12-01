import { useTranslation } from "react-i18next";

function SettingPage(){

    const [t, i18n] = useTranslation();

    const changeLanguage = (language) =>{
        i18n.changeLanguage(language);
    }

    return<>
        <h1>{t("settings")}</h1>
        <p></p>
        <h3>{t("language")}</h3>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
        <p></p>
        <h3>{t("theme")}</h3>
    </>
}

export default SettingPage;
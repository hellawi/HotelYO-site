import { useTranslation } from "react-i18next";

function LanguageSwitch() {
  const { i18n } = useTranslation();
  return (
    <div>
        <select onChange={(event) => i18n.changeLanguage(event.target.value)} value={i18n.language} style={{width: '60px', height: '30px'}}>
          <option value="bg">BG 🇧🇬</option>
          <option value="en">EN 🇺🇸</option>
          <option value="ru">RU 🇷🇺</option>
          <option value="de">DE 🇩🇪</option>
        </select>
    </div>
  );
}
export default LanguageSwitch;

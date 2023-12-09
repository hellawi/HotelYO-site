import "./RotatingText.css";
import { useTranslation } from "react-i18next";
function RotatingText() {
  const { t } = useTranslation()
  
  return (
    <div>
      <div id='container'>
        {t('mainTitle')}
        <br className='br-rot' />
        <br className="br-rot" />
        <div id='flip'>
        <div><div>{t('adj01')}</div></div>
        <div><div>{t('adj02')}</div></div>
        <div><div>{t('adj03')}</div></div>
      </div>
      </div>
    </div>
  );
}
export default RotatingText;

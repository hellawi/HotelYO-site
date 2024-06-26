import { Facebook } from "@mui/icons-material";
import styles from "./Header.module.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { useTranslation } from "react-i18next";
import SwipeableTemporaryDrawer from "../Sidebar/Sidebar";

function Header() {
  const { t } = useTranslation()
  return (
    <header>
      <a href="/" className={styles['link']}>
        <h1 className={styles['logo']}>Hotel YO</h1>
        {/* <img src="/logos/logo.jpeg" alt="" className={styles["logo"]} /> */}
      </a>
      <div className={styles['res-block']}>
          <LanguageSwitch />
          <SwipeableTemporaryDrawer/>
      </div>

      <div className={styles["links"]}>
        <ul className={styles['ul-header']}>
          <li>
            <a href="/apartments" className={styles["header-link"]}>
              {t('apartments')}
            </a>
          </li>
          <li>
            <a href="/restaurant" className={styles["header-link"]}>
              {t('res')}
            </a>
          </li>
          <li>
            <a href="/aboutus" className={styles["header-link"]}>
              {t('aboutus')}
            </a>
          </li>
          <li>
            <a href="/contacts" className={styles["header-link"]}>
              {t('contacts')}
            </a>
          </li>
          <li className={styles['lng-switch']}>
            <LanguageSwitch />
          </li>
          <li>
            <a href="https://facebook.com" className={styles["header-link"]}>
              <Facebook />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" className={styles["header-link"]}>
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;

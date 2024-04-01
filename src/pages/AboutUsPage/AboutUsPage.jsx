import { Chip } from "@mui/joy";
import styles from "./AboutUsPage.module.css";
import { useTranslation } from "react-i18next";
function AboutUsPage() {
  const { t } = useTranslation()
  return (
    <div>
      <h1 className="heading">{t('aboutus')}</h1>
      <p className={styles["aboutus-text"]}>
        {t('mainDesc')}
      </p>
      <div className={styles["photo-box-01"]}>
        <img
          src="/aboutus/789257823.jpeg"
          alt=""
          className={styles["img-aboutus"]}
        />
        <img
          src="/aboutus/789260289.jpeg"
          alt=""
          className={styles["img-aboutus"]}
        />
        <img
          src="/aboutus/789386628.jpeg"
          alt=""
          className={styles["img-aboutus"]}
        />
        <img
          src="/aboutus/pool.jpeg"
          alt=""
          className={styles["img-aboutus"]}
        />
      </div>
      <div className={styles["photo-box-01"]}>
        <img
          src="/apartments/01/1.jpeg"
          alt=""
          className={styles["img-aboutus"]}
        />
        <img
          src="/apartments/03/vid.jpeg"
          alt=""
          className={styles["img-aboutus"]}
        />
        <img
          src="/aboutus/4.jpeg"
          alt=""
          className={styles["img-aboutus"]}
        />
        <img
          src="/aboutus/corridor.jpeg"
          alt=""
          className={styles["img-aboutus"]}
        />
      </div>
      <div className={styles["photo-box-01"]}>
        <img
          src="/aboutus/bufet.jpeg"
          alt=""
          className={styles["img-aboutus"]}
        />
        <img
          src="/restaurant/res02.jpeg"
          alt=""
          className={styles["img-aboutus"]}
        />
        <img
          src="/restaurant/res03.jpeg"
          alt=""
          className={styles["img-aboutus"]}
        />
        <img
          src="/hotel-fasad.jpeg"
          alt=""
          className={styles["img-aboutus"]}
        />
      </div>
    </div>
  );
}
export default AboutUsPage;

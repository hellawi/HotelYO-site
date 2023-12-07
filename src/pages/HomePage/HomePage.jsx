import { useTranslation } from "react-i18next";
import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { Images03, Images04 } from "../../components/Carousel/Images";
import ImageCarousel from "../../components/Carousel/ImageCarousel/ImageCarousel";
import OverlayBg from "../../components/OverlayBg/OverlayBg";
function HomePage() {
  const { t } = useTranslation();
  const [imagesStandard, setImagesStandard] = useState()
  useEffect(() => {
    setImagesStandard(Images04)
  }, [])
  return (
    <div>
      <OverlayBg />
      <main className={styles["main-box"]}>
        <h1 className="heading">{t("aboutus")}</h1>
        <div className={styles["aboutus-text-main"]}>
          <img
            src="/hotel-fasad.jpeg"
            alt=""
            className={styles["aboutus-img-fasad"]}
          />
          <p className={styles["aboutus-textt-main"]}>
            {t('mainDesc')}
          </p>
        </div>
        <div className={styles['image-carousel-box']}>
          <ImageCarousel images={imagesStandard} width='650px' />
        </div>
      </main>
    </div>
  );
}
export default HomePage;

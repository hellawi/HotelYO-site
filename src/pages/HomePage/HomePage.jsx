import { useTranslation } from "react-i18next";
import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { Images03, Images04 } from "../../components/Carousel/Images";
import ImageCarousel from "../../components/Carousel/ImageCarousel/ImageCarousel";
import OverlayBg from "../../components/HomePage/OverlayBg/OverlayBg";
function HomePage() {
  const { t } = useTranslation();
  const [imagesStandard, setImagesStandard] = useState([]);
  useEffect(() => {
    setImagesStandard(Images04);
  }, []);
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
          <p className={styles["aboutus-textt-main"]}>{t("mainDesc")}</p>
        </div>
        <div className={styles["image-carousel-box"]}>
          <ImageCarousel images={imagesStandard} width="650px" />
        </div>
      </main>
      <div className={styles["our-partners"]}>
        <h1 className="heading">{t('partners')}</h1>
        <div className={styles["our-partners-box"]}>
          <a href="https://dentaprime.bg/">
            <img
              src="/logos/dentaprime.jpeg"
              alt=""
              className={styles["logo-partner"]}
            />
          </a>
          <a href="https://www.booking.com/hotel/bg/yo.bg.html">
            <img
              src="/logos/booking-horizontal.png"
              alt=""
              className={styles["logo-partner"]}
            />
          </a>
          <a href="https://tripadvisor.com">
            <img
              src="/logos/tripadvisor.png"
              alt=""
              className={styles["logo-partner"]}
            />
          </a>
          <a href="https://pochivka.bg">
            <img
              src="/logos/pochivka.png"
              alt=""
              className={styles["logo-partner"]}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default HomePage;

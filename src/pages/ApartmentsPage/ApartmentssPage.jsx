import styles from "./Apartments.module.css";
import { useTranslation } from "react-i18next";
import SwipeableTextMobileStepper from "../../components/ApartmentCard.jsx";

function ApartmentsPage() {
  const images01 = [
    {
      imgPath: "/apartments/01/1.jpeg",
    },
    {
      imgPath: "/apartments/01/5.jpeg",
    },
    {
      imgPath: "/apartments/01/6.jpeg",
    },
    {
      imgPath: "/apartments/01/8.jpeg",
    },
  ];

  const images04 = [
    {
      imgPath: "/apartments/01/8.jpeg",
    },
    {
      imgPath: "/apartments/01/6.jpeg",
    },
    {
      imgPath: "/apartments/01/7.jpeg",
    },
    {
      imgPath: "/apartments/01/1.jpeg",
    },
  ];

  const images02 = [
    { imgPath: "/apartments/01/2.jpeg" },
    { imgPath: "/apartments/01/5.jpeg" },
    {imgPath: '/apartments/01/1.jpeg'},
    {imgPath: '/apartments/01/8.jpeg'}
  ];
  const images03 = [
    {
      imgPath: "/apartments/03/1.jpg",
    },
    {
      imgPath: "/apartments/03/4.jpeg",
    },
    {
      imgPath: "/apartments/01/4.jpeg",
    },
    {
      imgPath: "/apartments/01/2.jpeg",
    },
    {
      imgPath: "/apartments/03/vid.jpeg",
    },
  ];
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="heading">{t("ourApartments")}</h1>
      <div className={styles["box-apartments"]}>
        <SwipeableTextMobileStepper
          images={images01}
          category="Standard"
          description={t('descriptionApartment01')}
          advShower={t('bathroom')}
          advTerrase={t('balcony')}
          price='85 BGN'
          href={'https://forms.gle/ZGtbSptqofrFReKo6 '}
        />
        <SwipeableTextMobileStepper
          images={images03}
          category={t('family')} //  family with terrace
          description={t('descriptionApartment01')}
          price="95 BGN"
          advShower={t('bathroom')}
          advTerrase={t('terrace')}
          href={'https://forms.gle/bGLN4srn7qbnH4FQ7'}
        />
        <SwipeableTextMobileStepper
          images={images02}
          category={t('apartmentsbb')} // apartments with 2 bedrooms
          description={t('descriptionApartment03')}
          advShower={t('bathroom')}
          advTerrase={t('balcony')}
          price="150 BGN"
          href={'https://forms.gle/SAxNrFeytALg2HaZ9'}
        />
        <SwipeableTextMobileStepper
          images={images04}
          category={t('apartmentsbbt')} // apartments with 2 bedrooms and terrace
          advShower={t('shower')}
          advTerrase={t('terrace')}
          description={t('descriptionApartment04')}
          price="160 BGN"
          href={'https://forms.gle/41c8dGypZFCRRqMh7'}
        />
      </div>
      <div>
        <img src="/apartments/table.png" alt="" className={styles['table']} />
        <h2>{t('children')} <span style={{textDecoration: 'underline'}}>{t('free')}</span></h2>
        <h2>{t('pets')} - <span style={{textDecoration: 'underline'}}>{t('pprice')}</span></h2>
      </div>
    </div>
  );
}
export default ApartmentsPage;

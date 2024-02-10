
import styles from "./Apartments.module.css";
import { useTranslation } from "react-i18next";
import SwipeableTextMobileStepper from "../../components/ApartmentCard.jsx";
function ApartmentsPage() {
  const images01 = [
  {
    imgPath:
      '/apartments/01/1.jpeg',
  },
  {
    imgPath:
      '/apartments/01/2.jpeg',
  },
  {
    imgPath:
      '/apartments/01/3.jpeg',
  },
  {
    imgPath:
      '/apartments/01/5.jpeg',
  },
  {
    imgPath:
      '/apartments/01/6.jpeg',
  },
  {
    imgPath:
      '/apartments/01/7.jpeg',
  },
  {
    imgPath:
      '/apartments/01/8.jpeg',
  },
];

const images02 = [
  {
    imgPath:
      '/apartments/02/1.jpeg',
  },
  {
    imgPath:
      '/apartments/02/2.jpeg',
  },
  {
    imgPath:
      '/apartments/02/3.jpeg',
  },
  {
    imgPath:
      '/apartments/02/5.jpeg',
  },
  {
    imgPath:
      '/apartments/02/6.jpeg',
  },
  {
    imgPath:
      '/apartments/02/7.jpeg',
  },
  {
    imgPath:
      '/apartments/02/8.jpeg',
  },
  {
    imgPath:
      '/apartments/02/9.jpeg',
  },
  {
    imgPath:
      '/apartments/02/10.jpeg',
  },
  {
    imgPath:
      '/apartments/02/11.jpeg',
  },
];
const images03 = [
  {
    imgPath:
      '/apartments/03/1.jpeg',
  },
  {
    imgPath:
      '/apartments/03/2.jpeg',
  },
  {
    imgPath:
      '/apartments/03/3.jpeg',
  },
  {
    imgPath:
      '/apartments/03/5.jpeg',
  },
  {
    imgPath:
      '/apartments/03/6.jpeg',
  },
];
  const { t } = useTranslation()
  return (
    <div>
      <h1 className="heading">{t('ourApartments')}</h1>
      <div className={styles["box-apartments"]}>
        <SwipeableTextMobileStepper images={images01} category='Single' description='lorem ipsum dolor sit amet djdjjdjd' price='49 BGN' />
        <SwipeableTextMobileStepper images={images03} category='Double' description='lorem ipsum dolor sit amet dhdhjdjd' price='52 BGN' />
        <SwipeableTextMobileStepper images={images01} category='Double' description='lorem ipsum dolor sit amet dhdhjdjd' price='66 BGN' />
        <SwipeableTextMobileStepper images={images01} category='Double' description='lorem ipsum dolor sit amet dhdhjdjd' price='121.15 BGN' />
      </div>
    </div>
  );
}
export default ApartmentsPage;

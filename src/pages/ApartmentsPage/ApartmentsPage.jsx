import { useEffect, useState } from "react";
import Images from "../../components/Carousel/Images.js";
import styles from "./Apartments.module.css";
import BasicCard from "../../components/Card/Card";
import { useTranslation } from "react-i18next";
function ApartmentsPage() {
  const { t } = useTranslation()
  return (
    <div>
      <h1 className="heading">{t('ourApartments')}</h1>
      <div className={styles["box-apartments"]}>
        <BasicCard
          title="Standard"
          description="Lorem ipsum dolor sit amet."
          price="49 BGN"
        />
        <BasicCard
          title="Standard"
          description="Lorem ipsum dolor sit amet."
          price="49 BGN"
        />
        <BasicCard
          title="Standard"
          description="Lorem ipsum dolor sit amet."
          price="49 BGN"
        />
      </div>
      <div className={styles["box-apartments-02"]}>
        <BasicCard
          title="Standard"
          description="Lorem ipsum dolor sit amet."
          price="49 BGN"
        />
        <BasicCard
          title="Standard"
          description="Lorem ipsum dolor sit amet."
          price="49 BGN"
        />
        <BasicCard
          title="Standard"
          description="Lorem ipsum dolor sit amet."
          price="49 BGN"
        />
      </div>
    </div>
  );
}
export default ApartmentsPage;

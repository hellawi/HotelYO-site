import { useTranslation } from "react-i18next";
import styles from "./HomePage.module.css";
function HomePage() {
  const { t } = useTranslation()
  return (
    <div>
      <div className={styles["hero"]}>
        <h1 className={styles["hero-title"]}>
          {t('mainTitle')}
        </h1>
        <span className={styles["hotel-yo"]}>Hotel YO</span>
      </div>

      <div className={styles['main-box']}>
        <h1 className="heading">{t('aboutus')}</h1>
        <div className={styles["aboutus-text-main"]}>
          <img
            src="/hotel-fasad.jpeg"
            alt=""
            className={styles["aboutus-img-fasad"]}
          />
          <p className={styles["aboutus-textt-main"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni odit
            eveniet, error sed consequuntur nulla nihil laborum consectetur
            recusandae obcaecati minus maxime animi eligendi ratione id dicta
            architecto atque maiores rerum soluta, ab aliquid vero dolorem?
            Suscipit perspiciatis doloribus ullam iusto doloremque similique
            nisi quos, tempora officia impedit, ratione ea repellendus sed,
            facilis quod. Vitae ullam iste explicabo commodi facilis atque
            culpa? Alias odit, soluta cupiditate a eius dolorum laudantium!
            Repellendus, saepe? Optio, corporis amet illo dolor et voluptate ex
            suscipit exercitationem tenetur nisi doloribus rerum facere
            excepturi natus, animi vel! Similique reiciendis reprehenderit nemo
            nisi, illo enim iure, voluptatum ab necessitatibus mollitia
            cupiditate. Sequi quas odit recusandae rem nisi. Quos suscipit
            cumque repudiandae quaerat cupiditate deleniti veritatis, quibusdam
            dignissimos excepturi necessitatibus asperiores placeat.
            Perspiciatis aut praesentium non iure labore, nihil possimus quia
            omnis architecto unde quis culpa quaerat veniam nostrum, amet
            officia modi iste ea facilis!
          </p>
        </div>
      </div>
    </div>
  );
}
export default HomePage;

import { useEffect, useState } from "react"
import AccordionControlled from "../../components/Accordion/AccordionControlled"
import ImageCarousel from "../../components/Carousel/ImageCarousel/ImageCarousel"
import styles from './RestaurantPage.module.css'
import { Images02 } from "../../components/Carousel/Images"
import { useTranslation } from "react-i18next"

function RestaurantPage() {
  const [images, setImages] = useState([])
  const { t } = useTranslation()

  useEffect(() => {
    setImages(Images02)
  }, [])
  return (
    <div>
      <h1 className="heading">{t('res')}</h1>
      <div className={styles['accordion']}>
        <AccordionControlled />
      </div>
      <div className={styles['carousel']}>
        <ImageCarousel width='700px' images={images} />
      </div>
    </div>
  )
}
export default RestaurantPage
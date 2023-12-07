import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "../Icons/NavicationIcons";
import './_image-carousel.scss'

const ImageCarousel = ({ images, width, height }) => {
  const [activeImage, setActiveImage] = useState(1);
  const [imageCount, setImageCount] = useState(0);
  const [lightboxOpen] = useState(false);

  useEffect(() => {
    setImageCount(images.length)
  }, [images]);

  return (
    <div className={`image-carousel${lightboxOpen ? " lightbox" : ""}`} style={{width: width}}>
      <button
        className="image-carousel__button--prev"
        hidden={activeImage === 1}
        onClick={() => setActiveImage(activeImage > 1 ? activeImage - 1 : 1)}
        type="button"
      >
        <ChevronLeft />
      </button>
      <button
        className="image-carousel__button--next"
        onClick={() =>
          setActiveImage(activeImage !== imageCount ? activeImage + 1 : 1)
        }
        type="button"
      >
        <ChevronRight />
      </button>
      <ul className="image-carousel__list">
        {imageCount > 0 &&
          images.map((image, index) => {
            const count = index + 1;
            return (
              <li
                key={count}
                className={`image-carousel__item ${
                  activeImage === count
                    ? "active"
                    : activeImage > count
                    ? "left"
                    : "right"
                }`}
              >
                <figure className="image-carousel__figure" style={{height: height}}>
                  <img
                    className="image-carousel__image"
                    src={image.source}
                    alt={image.alt}
                  />
                  <figcaption className="image-carousel__figcaption">
                    {image.caption || ""}
                  </figcaption>
                </figure>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ImageCarousel;

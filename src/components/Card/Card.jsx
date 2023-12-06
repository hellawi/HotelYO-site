import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ImageCarousel from "../Carousel/ImageCarousel/ImageCarousel";
import { useEffect, useState } from "react";
import Images01 from "../Carousel/Images.js";
import styles from "./Card.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function BasicCard({ title, description, price, className }) {
  const [imagesStandard, setImagesStandard] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    setImagesStandard(Images01);
  }, []);
  return (
    <Card sx={{}} className={styles["card"]}>
      <CardContent>
        <ImageCarousel images={imagesStandard} width="400px" height="150px" />
        <Typography variant="h5" component="div" sx={{ textAlign: "center" }}>
          {title}
        </Typography>
        <br />
        <Typography fontSize={17} color="text.secondary" textAlign={"center"}>
          {description}
        </Typography>
        <br />
        <Typography
          variant="h5"
          sx={{ fontWeight: "xl", textAlign: "center", color: "red" }}
        >
          {price}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <form action="https://forms.gle/2VdbNsHMbELMir3c7">
          <button className={styles["button-action"]}>{t("bookNowBtn")}</button>
        </form>
      </CardActions>
    </Card>
  );
}
export default BasicCard;

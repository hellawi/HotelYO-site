import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { Card, CardContent, Chip } from "@mui/material";
import KitchenSharpIcon from "@mui/icons-material/KitchenSharp";
import SignalWifi4BarOutlinedIcon from "@mui/icons-material/SignalWifi4BarOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import BalconyOutlinedIcon from "@mui/icons-material/BalconyOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function SwipeableTextMobileStepper({
  images,
  category,
  description,
  price,
  href,
  advShower, 
  advTerrase
}) {
  const theme = useTheme();
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Card sx={{ maxWidth: 345, marginRight: "5vw", marginBottom: "5vw" }}>
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <SwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 255,
                    display: "block",
                    maxWidth: 400,
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                />
              ) : null}
            </div>
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <br />
        <div>
          <Chip
            label={t('cabeltv')}
            icon={<TvOutlinedIcon />}
            sx={{
              bgcolor: "#f0b907",
              fontSize: "12px",
              marginRight: "5px",
              marginBottom: "10px",
            }}
          />
          <Chip
            label={t('conditioner')}
            icon={<AcUnitOutlinedIcon />}
            sx={{
              bgcolor: "#f0b907",
              fontSize: "12px",
              marginRight: "5px",
              marginBottom: "10px",
            }}
          />
          <Chip
            label={advTerrase}
            icon={<BalconyOutlinedIcon />}
            sx={{
              bgcolor: "#f0b907",
              fontSize: "12px",
              marginRight: "5px",
              marginBottom: "10px",
            }}
          />
          <Chip
            label={advShower}
            icon={<ShowerOutlinedIcon />}
            sx={{
              bgcolor: "#f0b907",
              fontSize: "12px",
              marginRight: "5px",
              marginBottom: "10px",
            }}
          />
          <Chip
            label="WiFi"
            icon={<SignalWifi4BarOutlinedIcon />}
            sx={{
              bgcolor: "#f0b907",
              fontSize: "12px",
              marginRight: "5px",
              marginBottom: "10px",
            }}
          />
        </div>
        <br />
        <span
          style={{ fontSize: "30px", fontWeight: "bold", color: "#0b92e6" }}
        >
          {price}
        </span>
      </CardContent>

      <div style={{ marginBottom: "15px" }}>
        <a href={href} style={{textDecoration: 'none'}} target="_blank">
        `<Button
          size="small"
          variant="outlined"
          color="error"
          sx={{marginBottom: '10px'}}
        >
          <img src="/skidka.png" alt="" width="60px" height="60px" />
          {t("bookNowBtn")}
        </Button>
        </a>
        <a href="https://www.booking.com/hotel/bg/yo.bg.html" style={{textDecoration: 'none'}} target="_blank">
          <Button size="small" variant="outlined">
            <img src="/logos/booking.png" alt="" width="60px" height="60px" />
            Book via Booking
          </Button>
        </a>
      </div>
    </Card>
  );
}

export default SwipeableTextMobileStepper;

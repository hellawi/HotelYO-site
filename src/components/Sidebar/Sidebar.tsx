import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import styles from "./Sidebar.module.css";
import { useTranslation } from "react-i18next";

type Anchor = "left";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });
  const { t } = useTranslation();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h1
        style={{
          fontSize: "20px",
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        Hotel Yo
      </h1>
      <Divider />
      <List>
        {[
          <a href="/apartments" style={{ color: "black", fontSize: "20px" }}>
            <span
              className="material-symbols-outlined"
              style={{ marginRight: "5vw" }}
            >
              apartment
            </span>
            {t("apartments")}
          </a>,
          <a href="/restaurant" style={{ color: "black", fontSize: "20px" }}>
            <span
              className="material-symbols-outlined"
              style={{ marginRight: "5vw" }}
            >
              restaurant
            </span>
            {t("res")}
          </a>,
          <a href="/aboutus" style={{ color: "black", fontSize: "20px" }}>
            <span className="material-symbols-outlined" style={{ marginRight: "5vw" }}>info</span>
            {t("aboutus")}
          </a>,
          <a href="/contacts" style={{ color: "black", fontSize: "20px" }}>
            <span className="material-symbols-outlined" style={{ marginRight: "5vw" }}>contacts</span>
            {t("contacts")}
          </a>,
        ].map((text) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <label
            onClick={toggleDrawer(anchor, true)}
            className={styles["label"]}
          >
            <span></span>
          </label>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

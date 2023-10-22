import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalBarIcon from "@mui/icons-material/LocalBar"; //cocktail hour
import RoomServiceIcon from "@mui/icons-material/RoomService"; //reception
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation"; //sendoff
import LocalFloristIcon from "@mui/icons-material/LocalFlorist"; //table decor
import FavoriteIcon from "@mui/icons-material/Favorite"; //ceremony
import { IconButton } from "@mui/material";
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{ backgroundColor: "#9caf88" }}
    >
      <List style={{ backgroundColor: "#9caf88" }}>
        {["Ceremony"].map((text) => (
          <Link
            to="/Categories/Ceremony"
            style={{ color: "black", textDecoration: "none" }}
          >
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List style={{ backgroundColor: "#9caf88" }}>
        {["Cocktail Hour"].map((text) => (
          <Link
            to="/Categories/CocktailHour"
            style={{ color: "black", textDecoration: "none" }}
          >
            <ListItem
              key={text}
              disablePadding
              style={{ backgroundColor: "#9caf88" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <LocalBarIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List style={{ backgroundColor: "#9caf88" }}>
        {["Wedding Reception"].map((text) => (
          <Link
            to="/Categories/WeddingReception"
            style={{ color: "black", textDecoration: "none" }}
          >
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <RoomServiceIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List style={{ backgroundColor: "#9caf88" }}>
        {["Table Decor"].map((text) => (
          <Link
            to="/Categories/TableDecor"
            style={{ color: "black", textDecoration: "none" }}
          >
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocalFloristIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List style={{ backgroundColor: "#9caf88" }}>
        {["Getaway"].map((text) => (
          <Link
            to="/Categories/Getaway"
            style={{ color: "black", textDecoration: "none" }}
          >
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EmojiTransportationIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      ></IconButton>
      <Drawer
        anchor="left"
        open={state}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#9caf88",
          },
        }}
      >
        {list("left")}
      </Drawer>
      <Outlet />
    </div>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalBarIcon from '@mui/icons-material/LocalBar'; //cocktail hour
import RoomServiceIcon from '@mui/icons-material/RoomService'; //reception
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation'; //sendoff
import LocalFloristIcon from '@mui/icons-material/LocalFlorist'; //table decor
import FavoriteIcon from '@mui/icons-material/Favorite'; //ceremony
import { Routes, Route, Outlet, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
export default function MenuBar(category) {
  const [state, setState] = React.useState ({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = (anchor) => (
    
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer( false)}
      style = {{backgroundColor: '#9caf88'}}
    >
      <List style = {{backgroundColor: '#9caf88'}}>
        {['Ceremony'].map((text) => (
          <Link to="/about" style = {{ color: 'black', textDecoration: 'none'}}>
            <ListItem key={text}disablePadding>            
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
      <List style = {{backgroundColor: '#9caf88'}} >
        {['Cocktail Hour'].map((text) => (
          <Link to="/about" style = {{ color: 'black', textDecoration: 'none'}}>
            <ListItem key={text}disablePadding style = {{backgroundColor: '#9caf88'}}>
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
      <List style = {{backgroundColor: '#9caf88'}}>
        {['Wedding Reception'].map((text) => (
          <Link to="/about" style = {{ color: 'black', textDecoration: 'none'}}>
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
      <List style = {{backgroundColor: '#9caf88'}}>
        {['Table Decor'].map((text) => (
          <Link to="/about" style = {{ color: 'black', textDecoration: 'none'}}>
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
      <List style = {{backgroundColor: '#9caf88'}}>
        {['Getaway'].map((text) => (
          <Link to="/about" style = {{ color: 'black', textDecoration: 'none'}}>
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
    <>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style = {{backgroundColor : '#758467'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />


        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <p>{category.id}</p>
        </Typography>
      </Toolbar>
    </AppBar>
    </Box>
    <Drawer 
            open={state}
            onClose={toggleDrawer(false)}
            PaperProps={{
                sx: {
                backgroundColor: "#9caf88"
                }
            }}>
                {list("left")}
          </Drawer>


    
      <Outlet />
    </>

      
  );
}

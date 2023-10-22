import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import '../App.css';

export default function ShopList() {


  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="Clear">
                <ClearIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton dense>
              <ListItemText id={labelId} primary={`DIY item $${value + 1}`} />
            </ListItemButton>
          </ListItem>
          
        );
      })}
    </List>
    
    
  );
}
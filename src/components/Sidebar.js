// src/components/Sidebar.js
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Sidebar({ onSelect }) {
  return (
    <List>
      <ListItem button onClick={() => onSelect('Personajes')}>
        <ListItemText primary="Personajes" />
      </ListItem>
      <ListItem button onClick={() => onSelect('Capítulos')}>
        <ListItemText primary="Capítulos" />
      </ListItem>
    </List>
  );
}

export default Sidebar;

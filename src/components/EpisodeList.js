// src/components/EpisodeList.js
import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(response => response.json())
      .then(data => setEpisodes(data.results))
      .catch(error => console.error('Error fetching episodes:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Capítulos</h2>
      <List>
        {episodes.map(episode => (
          <ListItem key={episode.id}>
            <ListItemAvatar>
              <Avatar alt={`Episodio ${episode.id}`} />
            </ListItemAvatar>
            <ListItemText
              primary={`Episodio ${episode.id}`}
              secondary={episode.name}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default EpisodeList;

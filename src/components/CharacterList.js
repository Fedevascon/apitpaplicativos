// src/components/CharacterList.js
import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import './CharacterList.css';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  const handleMouseEnter = characterId => {
    setHoveredCharacter(characterId);
  };

  const handleMouseLeave = () => {
    setHoveredCharacter(null);
  };

  return (
    <div>
      <h2>Lista de Personajes</h2>
      <List>
        {characters.map(character => (
          <ListItem
            key={character.id}
            onMouseEnter={() => handleMouseEnter(character.id)}
            onMouseLeave={handleMouseLeave}
            className={hoveredCharacter === character.id ? 'highlighted' : ''}
          >
            <ListItemAvatar>
              <Avatar alt={character.name} src={character.image} />
            </ListItemAvatar>
            <ListItemText
              primary={character.name}
              secondary={character.status}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default CharacterList;

// src/components/Dashboard.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import CharacterList from './CharacterList';
import EpisodeList from './EpisodeList'; // Componente de capítulos

function Dashboard() {
    const [selectedOption, setSelectedOption] = useState('Personajes');
  
    const handleOptionSelect = option => {
      setSelectedOption(option);
    };
  
    return (
      <div>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Sidebar onSelect={handleOptionSelect} />
          <div style={{ marginLeft: '16px' }}>
            {selectedOption === 'Personajes' ? (
              <CharacterList />
            ) : (
              <EpisodeList />
            )}
            {/* Otros componentes de tu dashboard */}
          </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;

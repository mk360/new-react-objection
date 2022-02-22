import { useState } from 'react';
import './App.css';
import Characters from './characters';
import CharacterButton from './components/character-button';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [modalIsDisplayed, setModalDisplay] = useState(false);
  const [statement, updateStatement] = useState('');

  return (
    <div className="App">
      <h1>Ace Attorney Objection</h1>

      <p>
        Select a character, make them say something,
        then press the Objection! button!
      </p>

      {Characters.map(char => (
        <CharacterButton
          character={char}
          selected={char.identifier === selectedCharacter}
          onSelection={setSelectedCharacter}
          key={char.identifier}
        />
      ))}
    </div>
  );
}

export default App;

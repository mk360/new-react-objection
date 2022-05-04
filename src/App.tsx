import React, { useState } from 'react';
import './App.css';
import Characters from './characters';
import CharacterButton from './components/character-button';
import Scene from './components/scene';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [modalIsDisplayed, setModalDisplay] = useState(false);
  const [statement, updateStatement] = useState('');

  function updateTextareaContent(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    updateStatement(value);
  };

  return (
    <div className="App">
      <h1>Ace Attorney Objection</h1>

      <p>
        Select a character, make them say something,
        then press the Objection! button!
      </p>

      <div style={{ width: 570 }}>
        {Characters.map(char => (
          <CharacterButton
            character={char}
            selected={char.identifier === selectedCharacter}
            onSelection={setSelectedCharacter}
            key={char.identifier}
          />
        ))}

        <textarea
          value={statement}
          onChange={updateTextareaContent}
        />

        <button onClick={() => {
          setModalDisplay(true);
        }}>display modal</button>
      </div>
      {modalIsDisplayed && <Scene dialogue='' character={Characters.find(c => c.identifier === selectedCharacter)!} />}
    </div>
  );
}

export default App;

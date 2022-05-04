import { useEffect, useState } from "react";
import loadCharacterAssets from "../../utils/load-character-assets";
import loadEnvironmentAssets from "../../utils/load-environment-assets";
import SceneProps from "./props";

function Scene(props: SceneProps) {
  const [displayScene, setSceneDisplay] = useState(false);
  const [displayedDialogue, updateDisplayedDialogue] = useState('');
  const [isSpeaking, setSpeakingState] = useState(false);

  const { character, dialogue } = props;
  let dialogueCopy = dialogue;
  const characterAssets = loadCharacterAssets(character);
  const environmentAssets = loadEnvironmentAssets(character);

  const { objection } = characterAssets;

  objection.onended = function() {
    setTimeout(() => {
      setSceneDisplay(true);
    }, 600);
  };

  useEffect(() => {
    if (displayedDialogue !== dialogue) {
      const addedDialogueCharacter = dialogueCopy[0];
      
      setSpeakingState(isLetter(addedDialogueCharacter));

      characterAssets.blip.play().then(() => {
        updateDisplayedDialogue((oldDialogueState) => {
          return `${oldDialogueState}${addedDialogueCharacter}`;
        });
  
        dialogueCopy = dialogueCopy.substring(1, dialogueCopy.length);
      });
    }
  }, [displayedDialogue]);

  const usedAnimation = (
    isSpeaking ? characterAssets.speakingGif
    : characterAssets.silentGif
  ); 

  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      backgroundColor: 'rgba(0,0,0,0.4)'
    }}>
      {!displayScene ? (
        <div style={{
          zIndex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          backgroundColor: 'black',
        }}>
        </div>
      ) : (
        <div style={{
          width: '100%',
          height: '100%',
          top: 0,
          position: 'absolute',
          left: 0,
          zIndex: 1,
        }}>
          <img src={environmentAssets.background} />
          <img src={usedAnimation} />
          <img src={environmentAssets.bench} />
        </div>
      )}
    </div>
  );
};

function isLetter(char: string) {
  return char.length === 1 && !!char.match(/[a-z ]/i);
};

export default Scene;

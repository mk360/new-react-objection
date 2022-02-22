import { useState } from "react";
import loadCharacterAssets from "../../utils/load-character-assets";
import SceneProps from "./props";

function Scene(props: SceneProps) {
  const [displayScene, setSceneDisplay] = useState(false);
  const [displayedDialogue, updateDisplayedDialogue] = useState('');

  const { character, dialogue } = props;
  const characterAssets = loadCharacterAssets(character);

  const { objection } = characterAssets;

  objection.onended = function() {
    setTimeout(() => {
      setSceneDisplay(true);
    }, 600);
  };

  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
    }}>
      {!displayScene ? (
        <div style={{
          zIndex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
        }}>
        </div>
      ) : null}
    </div>
  );
};

export default Scene;

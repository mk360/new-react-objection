import ButtonCorner from "../../common/button-corner";
import Character from "../../common/character";

interface CharacterButtonProps {
  character: Character;
  onSelection: (character: Character) => void;
  cornerClass?: ButtonCorner;
};

export default CharacterButtonProps;

import React from "react";
import ButtonCorner from "../../common/button-corner";
import Character from "../../common/character";

interface CharacterButtonProps {
  character: Character;
  selected: boolean;
  onSelection: React.Dispatch<React.SetStateAction<string>>;
  cornerClass?: ButtonCorner;
};

export default CharacterButtonProps;

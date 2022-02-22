import Character from "../common/character";

function loadCharacterAssets(character: Character) {
  const speakingGif: string = require(`../assets/animations/speaking/${character.identifier}.gif`);
  const silentGif: string = require(`../assets/animations/silent/${character.identifier}.gif`);

  const blip = new Audio(`../assets/blips/${character.useFemaleBlip ? 'female' : 'male'}.ogg`);
  const objection = new Audio(`../assets/objections/${character.identifier}.ogg`);

  return {
    speakingGif,
    silentGif,
    blip,
    objection,
  };
};

export default loadCharacterAssets;

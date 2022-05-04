import Character from "../common/character";

function loadEnvironmentAssets(character: Character) {
  const { side, modern } = character;

  const backgroundFolder = modern ? '../assets/backgrounds-modern' : '../assets/common/backgrounds';
  const background: string = require(`${backgroundFolder}/${side}.png`);
  const bench: string = require(`../assets/common/benches/${side}.png`);
  const globalObjection: string = require('../assets/common/objection.png');
  console.log({ background, bench, globalObjection });
  return {
    background,
    bench,
    globalObjection,
  };
};

export default loadEnvironmentAssets;

import CharacterButtonProps from "./props";
import './style.scss';

const componentName = 'character-button';

const CharacterButton = (props: CharacterButtonProps) => {
  const { cornerClass, character, onSelection, selected } = props;
  const classes = [componentName];
  const selectionClass = selected ? 'selected' : '';

  if (cornerClass) {
    classes.push(cornerClass);
  }

  const clickHandler = () => {
    onSelection(character.identifier);
  };

  return (
    <button
      className={`${character.name} ${classes.join('-')} ${selectionClass}`}
      onClick={clickHandler}
    >
      <img src={require(`../../assets/profiles/${character.identifier}.png`)} />
    </button>
  );
};

export default CharacterButton;

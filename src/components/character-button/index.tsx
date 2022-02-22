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
      className={`${character.identifier} ${classes.join('-')} ${selectionClass}`}
      onClick={clickHandler}
      style={{
        backgroundImage: `url(${require(`../../assets/profiles/${character.identifier}.png`)}`,
        width: 74,
        backgroundRepeat: 'no-repeat',
        height: 74,
      }}
    />
  );
};

export default CharacterButton;

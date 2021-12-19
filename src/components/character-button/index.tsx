import CharacterButtonProps from "./props";
import './style.scss';

const componentName = 'character-button';

const CharacterButton = (props: CharacterButtonProps) => {
  const { cornerClass, character, onSelection } = props;
  const classes = [componentName];

  if (cornerClass) {
    classes.push(cornerClass);
  }

  return (
    <button
      className={`${character.name} ${classes.join('-')}`}
    >
      {character.name} {/* until i somehow style it better */}
    </button>
  );
};

export default CharacterButton;

import CourtroomSide from "./courtroom-side";

interface Character {
  identifier: string;
  modern?: true;
  name: string;
  nametag: string;
  side: CourtroomSide;
  useFemaleBlip?: true;
}

export default Character;

import CourtroomSide from "./courtroom-side";

interface Character {
  identifier: string;
  modern?: true;
  name: string;
  nametag: string;
  side: CourtroomSide;
}

export default Character;

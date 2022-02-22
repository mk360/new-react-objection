import Character from "./common/character";
import CourtroomSide from "./common/courtroom-side";

const Characters: Character[] = [
  {
    name: 'Phoenix Wright',
    nametag: 'Phoenix',
    side: CourtroomSide.DEFENSE,
    identifier: 'phoenix',
  },
  {
    name: 'Mia Fey',
    nametag: 'Mia',
    side: CourtroomSide.DEFENSE,
    identifier: 'mia',
  },
  {
    name: 'Miles Edgeworth',
    nametag: 'Edgeworth',
    side: CourtroomSide.PROSECUTION,
    identifier: 'edgeworth',
  },
  {
    name: 'Young Miles Edgeworth',
    nametag: 'Edgeworth',
    side: CourtroomSide.PROSECUTION,
    identifier: 'y_edgeworth',
  },
  {
    name: 'Manfred von Karma',
    nametag: 'von Karma',
    side: CourtroomSide.PROSECUTION,
    identifier: 'manfred',
  },
  {
    name: 'Franziska von Karma',
    nametag: 'Franziska',
    side: CourtroomSide.PROSECUTION,
    identifier: 'franziska',
  },
  {
    name: 'Apollo Justice',
    nametag: 'Apollo',
    side: CourtroomSide.DEFENSE,
    modern: true,
    identifier: 'apollo',
  },
  {
    name: 'Klavier Gavin',
    nametag: 'Klavier',
    side: CourtroomSide.PROSECUTION,
    modern: true,
    identifier: 'klavier',
  },
  {
    name: 'Young Klavier Gavin',
    nametag: 'Klavier',
    side: CourtroomSide.PROSECUTION,
    modern: true,
    identifier: 'y_klavier',
  },
  {
    name: 'Godot',
    nametag: 'Godot',
    side: CourtroomSide.PROSECUTION,
    identifier: 'godot',
  },
  {
    name: 'Winston Payne - AA1',
    nametag: 'Payne',
    side: CourtroomSide.PROSECUTION,
    identifier: 'payne1',
  },
  {
    name: 'Winston Payne - AA3',
    nametag: 'Payne',
    side: CourtroomSide.PROSECUTION,
    identifier: 'payne2'
  },
  {
    name: 'Winston Payne - AA4',
    nametag: 'Payne',
    side: CourtroomSide.PROSECUTION,
    modern: true,
    identifier: 'payne3',
  }
];

export default Characters;

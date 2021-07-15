export type CharacterType = {
  url: string;
  name: string;
  gender: string;
  culture: string;
  born: string;
  died: string;
  titles: string[];
  aliases: string[];
  alias: string;
  father: string;
  mother: string;
  spouse: string;
  allegiances: string[];
  allegiance: string;
  books: string[];
  povBooks: string[];
  tvSeries: string[];
  playedBy: string[];
}

export type HouseType = {
  url: string;
  name: string;
  region: string;
  coatOfArms:	string;
  words:	string;
  titles: string[];
  seats: string[];
  currentLord: string;
  heir: string;
  overlord: string;
  founded: string;
  founder: string;
  diedOut: string;
  ancestralWeapons: string;
  cadetBranches: string;
  swornMembers: string;
}

export type CharacterProps = {
  characters: CharacterType[];
  houses: HouseType[];
}

export type SingleCharacterProps = {
  character: CharacterType;
}

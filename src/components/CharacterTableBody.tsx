import { FC } from 'react';
import Character from '../components/Character';
import { ICharacter, IHouse } from '../types';

type CharacterProps = {
  characters: ICharacter[];
  houses: IHouse[];
  searchTerm: string;
  gender: string;
}

const CharacterTableBody: FC<CharacterProps> = ({ characters, searchTerm, gender }) => {
  return (
    <tbody>
      {
        characters.filter(character => (
          character.culture.toLowerCase().includes(searchTerm.toLowerCase()) && character.gender.includes(gender)
        )).map((character, index) => (
          <Character 
            key={index}
            character={character}
          />
        ))
      }
  </tbody>
  )
}

export default CharacterTableBody;

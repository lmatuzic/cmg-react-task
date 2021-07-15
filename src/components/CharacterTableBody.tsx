import { FC } from 'react';
import Character from '../components/Character';
import { CharacterProps } from '../types';

const CharacterTableBody: FC<CharacterProps> = ({ characters, houses }) => {
  return (
    <tbody>
      {
        houses.map(house => console.log(house))
      }

      {
        characters.map((character, index) => (
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

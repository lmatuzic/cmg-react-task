import { FC } from 'react';
import { CharacterType } from '../types';

type CharacterProps = {
  character: CharacterType;
}

const Character: FC<CharacterProps> = ({ character }) => {
  return (
    <tr>
      <td data-column="Character"> 
        <span className="character__name">{character.name}</span>
        <span className="character__aliases">{character.aliases}</span>
      </td>

      <td data-column="Alive">
        {`${character.born === "" ? "Born: Unknown" : "Born: " + character.born}`}
        <br />
        {`${character.died === "" ? "Died: Unknown" : "Died: " + character.died}`}
      </td>

      <td data-column="Gender">
        {`${character.gender === "" ? "Unknown" : character.gender}`}
      </td>

      <td data-column="Culture">
        {`${character.culture === "" ? "Unknown" : character.culture}`}
      </td>

      <td data-column="Allegiances">
        {
          character.allegiances.length < 1 ? "None" : character.allegiances.map((allegiance, index) => (
            <span key={index}>
              {allegiance.substring(allegiance.lastIndexOf('/') + 1)}
            </span>
          ))
        }
      </td>

      <td data-column="# of Books"> 
        {character.books.length}
      </td>
    </tr>
  )
}

export default Character;

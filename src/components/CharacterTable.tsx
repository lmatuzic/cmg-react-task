import { FC } from 'react';
import { CharacterType } from '../types';

type CharacterProps = {
  characters: CharacterType[];
}

const CharacterTable: FC<CharacterProps> = ({ characters }) => {
  return (
    <div className="characters__table">
      <div className="container">
        <h1>Character table</h1>

        <table>
          <thead>
            <tr>
              <th>Character</th>
              <th>Alive</th>
              <th>Gender</th>
              <th>Culture</th>
              <th>Allegiances</th>
              <th># of Books</th>
            </tr>
          </thead>

          <tbody>
            {
              characters.map((character, index) => (
                <tr key={index}>
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
                    <div>
                      {
                        character.allegiances.length < 1 ? "None" : character.allegiances.map(allegiance => (
                          <div>{allegiance}</div>
                        ))
                      }
                    </div>
                  </td>

                  <td data-column="# of Books"> 
                    {character.books.length}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CharacterTable;

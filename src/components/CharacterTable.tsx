import { FC } from 'react';
import { CharacterType, HouseType } from '../types';
import Character from '../components/Character';

type CharacterProps = {
  characters: CharacterType[];
  houses: HouseType[];
}

const CharacterTable: FC<CharacterProps> = ({ characters, houses }) => {
  return (
    <div className="characters__table">
      <div className="container">
        <h1>Character table</h1>
        {
          houses.map(house => console.log(house))
        }

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
                <Character 
                  key={index}
                  character={character}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CharacterTable;

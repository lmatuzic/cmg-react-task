import { FC } from 'react';
import { CharacterProps } from '../types';
import CharacterTableHeader from './CharacterTableHeader';
import CharacterTableBody from './CharacterTableBody';

const CharacterTable: FC<CharacterProps> = ({ characters, houses }) => {
  return (
    <div className="characters__table">
      <div className="container">
        <table>
          <CharacterTableHeader />
          <CharacterTableBody 
            characters={characters}
            houses={houses}
          />
        </table>
      </div>
    </div>
  )
}

export default CharacterTable;

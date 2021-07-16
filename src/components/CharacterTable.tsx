import { FC, useState } from 'react';
import { CharacterProps } from '../types';
import CharacterTableHeader from './CharacterTableHeader';
import CharacterTableBody from './CharacterTableBody';
import Filters from './Filters';

const CharacterTable: FC<CharacterProps> = ({ characters, houses }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gender, setGender] = useState("");

  const handleSelect = (e: any) => {
    setGender(e.target.value);
  };

  return (
    <div className="characters__table">
      <div className="container">
        <Filters 
          setSearchTerm={setSearchTerm}
          gender={gender}
          handleSelect={handleSelect}
        />

        <table>
          <CharacterTableHeader />
          <CharacterTableBody 
            characters={characters}
            houses={houses}
            searchTerm={searchTerm}
            gender={gender}
          />
        </table>
      </div>
    </div>
  )
}

export default CharacterTable;

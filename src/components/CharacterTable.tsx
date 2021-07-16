import { FC, useState } from 'react';
import { CharacterProps } from '../types';
import CharacterTableHeader from './CharacterTableHeader';
import CharacterTableBody from './CharacterTableBody';

const CharacterTable: FC<CharacterProps> = ({ characters, houses }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gender, setGender] = useState('');

  const handleSelect = (e: any) => {
    setGender(e.target.value);
  };

  const filteredGender = characters.filter(character => (
      character.gender.includes(gender)
    )
  );

  console.log(filteredGender);

  return (
    <div className="characters__table">
      <div className="container">
        <div className="filter__wrapper">
          <input 
            type="text" 
            placeholder="Search"
            onChange={e => setSearchTerm(e.target.value)}
          />

          <select value={gender} onChange={handleSelect}>
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>

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

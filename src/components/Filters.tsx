import { FC, Dispatch, SetStateAction } from 'react';

type FilterTypes = {
  handleSelect: (value: any) => void;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  gender: string;
}

const Filters: FC<FilterTypes> = ({ setSearchTerm, handleSelect, gender }) => {
  return (
    <div className="filter__wrapper">
      <div className="search-filter">
        <input 
          type="text" 
          placeholder="Search"
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className="caption">Search by culture</div>
      </div>

      <select 
        className="dropdown-filter" 
        value={gender} 
        onChange={handleSelect}
        name="gender-filter"
      >
        <option value="">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Unknown">Unknown</option>
      </select>
    </div>
  )
}

export default Filters;

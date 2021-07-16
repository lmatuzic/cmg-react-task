import { FC } from 'react';

type PaginationDropdownTypes = {
  handlePagination: (value: any) => void;
  pageSize: number;
}

const PaginationDropdown: FC<PaginationDropdownTypes> = ({ handlePagination, pageSize }) => {
  return (
    <div className="pagination-dropdown-filter">
      <div className="container">
        <select 
          className="dropdown-filter"  
          name="pagination-filter"
          onChange={handlePagination}
          value={pageSize}
        >
          <option value="25">25</option>
          <option value="10">10</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  )
}

export default PaginationDropdown;

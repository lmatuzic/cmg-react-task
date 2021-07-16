import { FC } from 'react';

const CharacterTableHeader: FC = () => {
  return (
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
  )
}

export default CharacterTableHeader;

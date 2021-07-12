import { FC, useState, useEffect } from 'react'; 
import './stylesheets/scss/global.scss';
import CharacterTable from './components/CharacterTable';
import { CharacterType } from './types';


const App: FC = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const charactersURL = "https://www.anapioficeandfire.com/api/characters?pageSize=50";

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(charactersURL);
      const data = await response.json();
      setCharacters(data);
      console.log(data);
    }

    fetchCharacters();
  }, []);

  return (
    <div className="App">
      <CharacterTable characters={characters} />
    </div>
  )
}

export default App;

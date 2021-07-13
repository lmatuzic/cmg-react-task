import { FC, useState, useEffect } from 'react'; 
import './stylesheets/scss/global.scss';
import { Switch, Route } from "react-router-dom";
import CharacterTable from './components/CharacterTable';
import HouseTable from './components/HouseTable';
import { CharacterType, HouseType } from './types';

const App: FC = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [houses, setHouses] = useState<HouseType[]>([]);
  const charactersURL = "https://www.anapioficeandfire.com/api/characters?pageSize=50";
  const housesURL = "https://www.anapioficeandfire.com/api/houses?pageSize=50";

  useEffect(() => {
    const fetchCharacters = async () => {
      const charactersResponse = await fetch(charactersURL);
      const housesResponse = await fetch(housesURL);
      const charactersData = await charactersResponse.json();
      const housesData = await housesResponse.json();
      setCharacters(charactersData);
      setHouses(housesData);
      console.log(charactersData);
      console.log(housesData);
    }

    fetchCharacters();
  }, []);

  return (
    <div className="App">
      <main className="content">
        <Switch>
          <Route exact path="/">
            <CharacterTable 
              characters={characters} 
              houses={houses}
            />
          </Route>

          <Route path="/houses">
            <HouseTable
              houses={houses}
            />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App;

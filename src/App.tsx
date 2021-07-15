import { FC, useState, useEffect } from 'react'; 
import './stylesheets/scss/global.scss';
import { Switch, Route } from "react-router-dom";
import CharacterTable from './components/CharacterTable';
import HouseTable from './components/HouseTable';
import { CharacterType, HouseType } from './types';
import { PulseLoader } from 'react-spinners';
import { css } from '@emotion/react';

const loaderCSS = css`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`
const App: FC = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [houses, setHouses] = useState<HouseType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const charactersURL = "https://www.anapioficeandfire.com/api/characters?pageSize=50";
  const housesURL = "https://www.anapioficeandfire.com/api/houses?pageSize=50";

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    const fetchCharacters = async () => {
      try {
        const charactersResponse = await fetch(charactersURL);
        const housesResponse = await fetch(housesURL);
        const charactersData = await charactersResponse.json();
        const housesData = await housesResponse.json();
        setCharacters(charactersData);
        setHouses(housesData);
      } catch(err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCharacters();

    return () => {
      abortController.abort();
    }
  }, []);

  return (
    <>
      {
        isLoading ? <PulseLoader size={14} css={loaderCSS} color='#3498db' /> :
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
      }
    </>
  )
}

export default App;

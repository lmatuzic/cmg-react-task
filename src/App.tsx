import { FC, useState, useEffect } from 'react'; 
import './stylesheets/scss/global.scss';
import { Switch, Route } from "react-router-dom";
import CharacterTable from './components/CharacterTable';
import House from './components/House';
import { ICharacter, IHouse } from './types';
import { PulseLoader } from 'react-spinners';
import { css } from '@emotion/react';

export const loaderCSS = css`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`
const App: FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [houses, setHouses] = useState<IHouse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageSize, setPageSize] = useState(25)
  const charactersURL = `https://www.anapioficeandfire.com/api/characters?pageSize=${pageSize}`;
  const housesURL = `https://www.anapioficeandfire.com/api/houses?pageSize=${pageSize}`;

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
  }, [charactersURL, housesURL]);

  const handlePagination = (e: any) => {
    setPageSize(e.target.value);
  };

  return (
    <>
      {
        isLoading ? 
          <PulseLoader 
            size={14} 
            css={loaderCSS} 
            color='#3498db' 
          /> :
          <div className="App">
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
        
            <main className="content">
              <Switch>
                <Route exact path="/">
                  <CharacterTable 
                    characters={characters} 
                    houses={houses}
                  />
                </Route>
      
                <Route path="/houses/:id">
                  <House />
                </Route>
              </Switch>
            </main>
          </div>
        }
    </>
  )
}

export default App;

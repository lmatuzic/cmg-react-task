import { FC, useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router";
import HouseDetails from './HouseDetails';
import { ParamTypes, IHouse } from '../types';
import { PulseLoader } from 'react-spinners';
import { loaderCSS } from '../App';

const House: FC = () => {
  const [house, setHouse] = useState<IHouse | null>();
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams<ParamTypes>();
  let history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    const fetchHouseDetails = async () => {
      try {
        const response = await fetch(`https://www.anapioficeandfire.com/api/houses/${id}`);
        const data = await response.json();
        setHouse(data);
      } catch(err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHouseDetails();
    return () => setHouse(null);
  }, [id]);
  
  const goBack = () => {
    history.push("/");
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
          <>
            <div className="container">
              <button className="back-button" onClick={() => goBack()}>Back</button>
              <HouseDetails 
                house={house}
              />
            </div>
          </>
        }
    </>
  )
}

export default House;

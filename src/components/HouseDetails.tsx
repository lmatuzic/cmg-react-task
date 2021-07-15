import { FC, useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router";
import { ParamTypes, IHouse } from '../types';
import { PulseLoader } from 'react-spinners';
import { loaderCSS } from '../App';

const HouseDetails: FC = () => {
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
          <div className="house__details">
            <div className="container">
              <button onClick={() => goBack()}>Back</button>

              <div>Name of the house {house?.name}</div>
              <div>Region: {house?.region}</div>
              <div>Coat of arms: {house?.coatOfArms}</div>
              <div>Words: {house?.words}</div>
              <div>
                Titles: 
                {
                  house?.titles.map((title, index) => (
                    <div key={index}>{title}</div>
                  ))
                }
              </div>

              <div>
                Seats: 
                {
                  house?.seats.map((seat, index) => (
                    <div key={index}>{seat}</div>
                  ))
                }
              </div>

              <div>Has died out: {house?.diedOut === "" ? "Unknown" : house?.diedOut}</div>
              <div>Has overlord: {house?.overlord === "" ? "No" : "Yes"}</div>
              <div>Number of Cadet Branches: {house?.cadetBranches.length}</div>
            </div>
          </div>
        }
    </>
  )
}

export default HouseDetails;

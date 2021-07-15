import { FC, useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router";
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
          <div className="house__details">
            <div className="container">
              <button onClick={() => goBack()}>Back</button>

              <div className="house__detail house__name">
                <strong>House name </strong>
                <div>{house?.name}</div>
              </div>

              <div className="house__detail house__region">
                <strong>Region</strong>
                <div>{house?.region}</div>
              </div>

              <div className="house__detail">
                <strong>Coat of arms</strong> 
                <div>{house?.coatOfArms}</div>
              </div>

              <div className="house__detail">
                <strong>Words</strong>
                <div>{house?.words}</div>
              </div>

              <div className="house__detail">
                <strong>Titles</strong> 
                {
                  house?.titles.map((title, index) => (
                    <div key={index}>
                      {title}
                    </div>
                  ))
                }
              </div>

              <div className="house__detail">
                <strong>Seats</strong> 
                {
                  house?.seats.map((seat, index) => (
                    <div key={index}>
                      {seat}
                    </div>
                  ))
                }
              </div>

              <div className="house__detail">
                <strong>Has died out</strong>
                <div>{house?.diedOut === "" ? "Unknown" : house?.diedOut}</div>
              </div>

              <div className="house__detail">
                <strong>Has overlord</strong> 
                <div>{house?.overlord === "" ? "No" : "Yes"}</div>
              </div>

              <div className="house__detail">
                <strong>Number of Cadet Branches</strong> 
                <div>{house?.cadetBranches.length}</div>
              </div>
            </div>
          </div>
        }
    </>
  )
}

export default House;

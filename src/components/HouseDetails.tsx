import { FC } from 'react';
import { SingleHouseProps} from '../types';

const HouseDetails: FC<SingleHouseProps> = ({ house }) => {
  return (
    <div className="house__details">
      <div className="house__detail house__name">
        <strong>House name </strong>
        <div>{house?.name}</div>
      </div>

      <div className="house__detail house__region">
        <strong>Region</strong>
        <div>{house?.region === "" ? "Unknown" : house?.region}</div>
      </div>

      <div className="house__detail">
        <strong>Coat of arms</strong> 
        <div>{house?.coatOfArms}</div>
      </div>

      <div className="house__detail">
        <strong>Words</strong>
        <div>{house?.words === "" ? "Unknown" : house?.words}</div>
      </div>

      <div className="house__detail">
        <strong>Titles</strong> 
        {
          house?.titles.map((title, index) => (
            <div key={index}>
              {title === "" ? "Unknown" : title}
            </div>
          ))
        }
      </div>

      <div className="house__detail">
        <strong>Seats</strong> 
        {
          house?.seats.map((seat, index) => (
            <div key={index}>
              {seat === "" ? "Unknown" : seat}
            </div>
          ))
        }
      </div>

      <div className="house__detail">
        <strong>Has died out</strong>
        <div>{house?.diedOut === "" ? "Unknown" : `Yes, in ${house?.diedOut}`}</div>
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
  )
}

export default HouseDetails;

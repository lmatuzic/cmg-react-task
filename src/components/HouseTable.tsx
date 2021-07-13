import { FC } from 'react';
import { HouseType } from "../types";

type HouseProps = {
  houses: HouseType[];
}

const HouseTable: FC<HouseProps> = ({ houses }) => {
  return (
    <div className="houses">
      <div className="container">
        <h1>House table</h1>
        {
          houses.map(house => (
            <div>{house.name}</div>
          ))
        }
      </div>
    </div>
  )
}

export default HouseTable;

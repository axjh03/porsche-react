import "./InfoContent.css";
import { CAR_DETAILS } from "./data";

export default function InfoContent({model}) {
    return (
      <div className="content">
        <img src={CAR_DETAILS[model].image}></img>
        <h2>{CAR_DETAILS[model].title}</h2>
        <p>{CAR_DETAILS[model].description}</p>
        <p><span>Price : </span>{CAR_DETAILS[model].price}</p>
        <p><span>Engine : </span>{CAR_DETAILS[model].engine}</p>
        <p><span>Horse Power : </span>{CAR_DETAILS[model].horsepower}</p>
        <p><span>Accleration : </span>{CAR_DETAILS[model].acceleration}</p>
        <p><span>Top Speed : </span>{CAR_DETAILS[model].topSpeed}</p>
        <p><span>Transmission : </span>{CAR_DETAILS[model].transmission}</p>
        <p><span>Drive Type : </span>{CAR_DETAILS[model].driveType}</p>
        <p><span>Seating : </span>{CAR_DETAILS[model].seating}</p>
        <p><span>Cargo Space : </span>{CAR_DETAILS[model].cargoSpace}</p>
        <p><span>Fuel Economy : </span>{CAR_DETAILS[model].fuelEconomy}</p>
      </div>
    );
  }
  
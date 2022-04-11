import React from "react";
import useInitialState from "../hooks/useInitialState";
import "../styles/DetailCharacters.css";
import Button from "./Button";

const DetailCharacters = ({ results }) => {
  const { handleClick, showCard, titleShow } = useInitialState();
  return (
    <div className="card-container">
      <ul className="card-name__ul">
        <li className="card-name__li" key={results.id}>
          Nombre: {results.name}
        </li>
      </ul>
      <div className="container-properties">
      <Button
        handleClick={handleClick}
        tileShow={titleShow}
        className="Button"
      />
        {!showCard ? null : (
          <ul className="card-detail">
            <li className="card-detail__li" key={results.id}>
              Height: {results.height}
            </li>
            <li className="card-detail__li" key={results.id}>
              Mass: {results.mass}
            </li>
            <li className="card-detail__li" key={results.id}>
              Hair color: {results.hair_color}
            </li>
            <li className="card-detail__li" key={results.id}>
              Skin color: {results.skin_color}
            </li>
            <li className="card-detail__li" key={results.id}>
              Eye color: {results.eye_color}
            </li>
            <li className="card-detail__li" key={results.id}>
              Birth years: {results.birth_year}
            </li>
            <li className="card-detail__li" key={results.id}>
              Gender: {results.gender}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default DetailCharacters;

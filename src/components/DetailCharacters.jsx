import React from "react";
import "../styles/DetailCharacters.css";

const DetailCharacters = ({ results }) => {
  return (
    <div className="card-characters">
      <ul>
        <li className="card-characters__li" key={results.id}>
          Nombre: {results.name}
        </li>
        <div className="container-properties">
          <li className="card-characters__li" key={results.id}>
            Height: {results.height}
          </li>
          <li className="card-characters__li" key={results.id}>
            Mass: {results.mass}
          </li>
          <li className="card-characters__li" key={results.id}>
            Hair color: {results.hair_color}
          </li>
          <li className="card-characters__li" key={results.id}>
            Skin color: {results.skin_color}
          </li>
          <li className="card-characters__li" key={results.id}>
            Eye color: {results.eye_color}
          </li>
          <li className="card-characters__li" key={results.id}>
            Birth years: {results.birth_year}
          </li>
          <li className="card-characters__li" key={results.id}>
            Gender: {results.gender}
          </li>
        </div>
      </ul>
    </div>
  );
};

export default DetailCharacters;

import React from "react";
import DetailCharacters from "../components/DetailCharacters";
import "../styles/Characters.css";
import useGetData from "../utils/useGetData";

const API = process.env.REACT_APP_CHARACTERS;

const Characters = () => {
  const characters = useGetData(API);
  return (
    <div className="main-characters" >
      <h1 className="characters-title">Star wars characters</h1>
      {characters.length === 0 && (
        <div className="container-loading">
          <h1 className="container-loading-two">
            <strong>Loading</strong>
          </h1>
        </div>
      )}
      {characters.map((characters, index) => (
        <DetailCharacters results={characters} key={index} />
      ))}
    </div>
  );
};

export default Characters;

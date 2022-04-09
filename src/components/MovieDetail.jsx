import React from "react";
import "../styles/MovieDetail.css";
import Button from "../components/Button";
import useInitialState from "../hooks/useInitialState";

const MovieDetail = ({ results }) => {
  const { handleClick, showCard, titleShow } = useInitialState();
  return (
    <div className="card-main">
      <ul className="ul-list">
        <li className="ul-list__info" key={results.id}>
          Title: {results.title}
        </li>
        <li className="ul-list__info" key={results.id}>
          Episode: {results.episode_id}
        </li>
        <li className="ul-list__info" key={results.id}>
          Director: {results.director}
        </li>
        <li className="ul-list__info" key={results.id}>
          Producer: {results.producer}
        </li>
      </ul>
      <div className="container-description">
        <Button handleClick={handleClick} tileShow={titleShow} className="Button"/>
        {!showCard ? null : (
          <p className="description" key={results.id}>
            {results.opening_crawl}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;

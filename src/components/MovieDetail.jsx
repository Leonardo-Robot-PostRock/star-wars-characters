import React from "react";
import "../styles/MovieDetail.css";

const MovieDetail = ({ results }) => {
  return (
    <ul className="ul-list">
      <li className="ul-list__info" key={results.id}>
        Title: {results.title}
      </li>
      <li className="ul-list__info" key={results.id}>
        {results.episode_id}
      </li>
      <li className="ul-list__info" key={results.id}>
        {results.opening_crawl}
      </li>
      <li className="ul-list__info" key={results.id}>
        {results.director}
      </li>
      <li className="ul-list__info" key={results.id}>
        {results.producer}
      </li>
    </ul>
  );
};

export default MovieDetail;

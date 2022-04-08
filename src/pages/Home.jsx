import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <div
        className="main-container bg-image">
        <h1 className="title-sw">Hello, in this section you can see some movies of star wars</h1>
        <div className="card-films">
          <ul className="ul-list">
            <li className="ul-list__info">Movie</li>
            <li className="ul-list__info">Episode</li>
            <li className="ul-list__info">Opening crawl</li>
            <li className="ul-list__info">director</li>
            <li className="ul-list__info">producer</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;

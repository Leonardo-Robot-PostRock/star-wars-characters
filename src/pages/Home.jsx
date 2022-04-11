import React from "react";
import MovieDetail from "../components/MovieDetail";
import grogu from "../assets/img/grogu.png";
import useGetData from "../utils/useGetData";
import "../styles/Home.css";

const API = process.env.REACT_APP_FILMS;

const Home = () => {
  const movies = useGetData(API);

  return (
    <div className="main-container bg-image">
      <h1 className="sw">STAR WARS FILMS</h1>
      {movies.length === 0 && (
        <div className="container-loading-one">
          <div className="container-loading">
            <img className="img-loading" src={grogu} alt="R2 D2" />
            <h1 className="loading">Loading</h1>
          </div>
        </div>
      )}
      {movies.map((title, index) => (
        <MovieDetail key={index} results={title} />
      ))}
    </div>
  );
};

export default Home;

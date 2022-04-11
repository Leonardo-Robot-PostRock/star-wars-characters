import React from "react";
import MovieDetail from "../components/MovieDetail";
import useGetData from "../utils/useGetData";
import "../styles/Home.css";

const API = process.env.REACT_APP_FILMS;


const Home = () => {
  const movies = useGetData(API);

  return (
    <div className="main-container bg-image">
      <h1 className="sw">
        Welcome!!! in this section you can see some films of Star Wars
      </h1>
      {movies.length === 0 && (
        <div className="container-loading">
          <h1 className="loading">
            <strong>Loading</strong>
          </h1>
        </div>
      )}
      {movies.map((title, index) => (
        <MovieDetail key={index} results={title} />
      ))}
    </div>
  );
};

export default Home;

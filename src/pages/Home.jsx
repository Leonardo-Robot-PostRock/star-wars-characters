import React, { useState } from "react";
import MovieDetail from "../components/MovieDetail";
import useGetData from "../utils/useGetData";
import "../styles/Home.css";

const API = process.env.REACT_APP_FILMS;

const Home = () => {
  const movies = useGetData(API);

  return (
    <div className="main-container bg-image">
      <h1 className="sw">
        Welcome, in this section you can see some movies of star wars
      </h1>
      {movies.length === 0 && <h1>Loading...</h1>}
      {movies.map((title, index) => 
        <MovieDetail key={index} results={title} />
        )}
    </div>
  );
};

export default Home;

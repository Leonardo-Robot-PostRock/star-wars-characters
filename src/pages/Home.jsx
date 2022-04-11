import React from "react";
import MovieDetail from "../components/MovieDetail";
import useGetData from "../utils/useGetData";
import "../styles/Home.css";

const API = process.env.REACT_APP_FILMS;

// const images = [
//   "https://images.wallpapersden.com/image/download/star-wars-obi-wan-artwork_am1qa2aUmZqaraWkpJRoa2VlrWdpaGc.jpg",
//   "https://wikiofnerds.com/wp-content/uploads/2021/09/Untitled-design-2021-09-19T154501.387.png",
//   "https://images5.alphacoders.com/111/thumb-1920-1113726.jpg",
//   "https://www.denofgeek.com/wp-content/uploads/2021/08/plo-koon-mandalorian-artwork-disney.jpg?resize=1024,580",
//   "https://cdn.vox-cdn.com/thumbor/uS-HIol2Y7LAbGjDGR8h4qlsTRw=/0x0:1650x1100/1400x933/filters:focal(693x418:957x682):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/69067639/shatterpoint_mace_windu_1650.0.jpg",
//   "https://www.themarysue.com/wp-content/uploads/2022/03/poll-kenobi-jinn-tall.jpeg",
// ];

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

/* eslint-disable react-hooks/exhaustive-deps */
import React,{ useEffect, useRef, useState } from "react";
import DetailCharacters from "../components/DetailCharacters";
import grogu from "../assets/img/grogu.png";
import "../styles/Characters.css";
import useGetData from "../utils/useGetData";

const API = process.env.REACT_APP_CHARACTERS;

const images = [
  "https://getwalls.io/media/large/2020/01/star-wars-high-quality-wallpapers-collection-large-1263190040.jpg",
  "https://i.pinimg.com/originals/cb/a5/b1/cba5b16dc840622ac68a94f839e21fce.jpg",
  "https://c4.wallpaperflare.com/wallpaper/204/685/74/star-wars-movies-spaceships-millenium-falcon-1920x1080-entertainment-movies-hd-art-wallpaper-preview.jpg",
  "https://coolwallpapers.me/th700/397395-star-wars-hd-widescreen-wallpapers-for-laptop.jpg",
  "https://i.imgur.com/t20fphJ.jpeg",
  "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
];

const Characters = () => {
  const characters = useGetData(API);
  const slidePresentationTime = 3000;
  const [currentSlide, setCurrentSlide] = useState(0);
  let sliderInterval = useRef();

  useEffect(() => {
    sliderInterval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, slidePresentationTime);
    return () => {
      clearInterval(sliderInterval);
    };
  });
  return (
    <div className="main-container">
      <div className="content">
        {images.map((image, index) => (
          <img
            id={index}
            key={index}
            className={index === currentSlide ? "image active" : "image"}
            src={image}
            alt="background images"
            style={{
              zIndex: `-${index + 1}`,
            }}
          />
        ))}
      </div>
      <div className="main-card-characters">
        <h1 className="characters-title">Star wars characters</h1>
        {characters.length === 0 && (
          <div className="container-loading-two">
            <img className="img-loading" src={grogu} alt="R2 D2" />
            <h1 className="title-loading-two">Loading</h1>
          </div>
        )}
        {characters.map((characters, index) => (
          <DetailCharacters results={characters} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Characters;

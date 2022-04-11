/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

const useStarWarsImage = (images) => {
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
  return currentSlide;
};
export default useStarWarsImage;

import { useState } from "react";

const useInitialState = () => {
  const [showCard, setShowCard] = useState(false);
  const [titleShow, setTitleShow] = useState("Show description");

  const handleClick = () => {
    setShowCard(!showCard);
    setTitleShow(showCard ? "Show description" : "Hide description");
  };

  return { handleClick, showCard, titleShow };
};

export default useInitialState;

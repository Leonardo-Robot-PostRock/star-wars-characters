import { useState } from "react";

const useInitialState = () => {
  const [showCard, setShowCard] = useState(false);

  const handleClick = () => {
    setShowCard(!showCard);
  };
  return handleClick;
};

export { useInitialState };

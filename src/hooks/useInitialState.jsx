import React, { useState } from "react";

function useInitialState(initialState) {
  const [showCard, setShowCard] = useState(false);

  const handleClick = () => {
    setShowCard(!showCard);
  };

  return { showCard, handleClick };
}

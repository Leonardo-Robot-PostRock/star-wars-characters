import React from "react";
import github from "../assets/icons/github.svg";

const githubRepo = "https://github.com/Leonardo-Robot-PostRock?tab=repositories";

const Header = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>Movies</li>
        <li>Characters</li>
        <li>
          <a href={githubRepo}>
            <img src={github} alt="github" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

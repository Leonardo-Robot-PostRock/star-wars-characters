import React from "react";
import github from "../assets/icons/github.svg";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const githubRepo = "https://github.com/Leonardo-Robot-PostRock?tab=repositories";

const Header = () => {
  return (
    <nav className="main-nav">
      <ul className="navigation">
        <Link to="/" className="Home Link">
          Films
        </Link>
        <Link to="/characters" className="Movies Link">
          Characters
        </Link>
      </ul>
      <ul className="navbar-right">
        <li className="container-github">
          <a href={githubRepo} className="githubRepo">
            <img
              href={githubRepo}
              src={github}
              alt="github"
              className="container__github--img"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

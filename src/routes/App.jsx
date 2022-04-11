import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import "../styles/App.css";
import useInitialState from "../hooks/useInitialState";

function App() {
  const { handleClick } = useInitialState();
  return (
    <React.Fragment>
      <BrowserRouter basename="/">
        <Layout>
          <Routes>
            <Route path="/" element={<Home handleClick={handleClick} />} />
            <Route path="characters" element={<Characters />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

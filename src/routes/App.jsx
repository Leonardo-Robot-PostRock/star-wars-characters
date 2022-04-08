import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import AppContext from "../context/AppContext";
import Characters from "../pages/Characters";
import "../styles/App.css";

function App() {
  return (
    <AppContext.Provider value={""}>
      <BrowserRouter basename="/">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/characters" element={<Characters />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;

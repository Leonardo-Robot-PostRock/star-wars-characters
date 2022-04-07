import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import AppContext from '../context/AppContext';
import "../styles/App.css";

function App() {
  return (
    <AppContext.Provider>
      <BrowserRouter basename='/'>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>

  );
}

export default App;

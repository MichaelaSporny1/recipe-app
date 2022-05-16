import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MyStyledHeader from './components/Header';
import RecipeList from './components/RecipeList';
import { Routes, Route, NavLink } from 'react-router-dom';
import RecipesByCategoryList from './components/CategoryList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyStyledHeader/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
        <Navbar/>
        <Routes>
          <Route path="/" element={<RecipeList/>}/>
          <Route path="categories/:category" element={<RecipesByCategoryList/>}/>
        </Routes>
    </div>
  );
}

export default App;

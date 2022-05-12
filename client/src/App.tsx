import React from 'react';
import logo from './logo.svg';
import './App.css';
// import CatFact from './components/RecipeList';
import CategoryList from './components/CategoryList';
import MyStyledHeader from './components/Header';
import banner from './assets/banner.jpg'

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
        <CategoryList/>
    </div>
  );
}

export default App;

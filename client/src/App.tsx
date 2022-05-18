import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import { Routes, Route } from 'react-router-dom';
import RecipesByCategoryList from './components/CategoryRecipeList';
import SingleRecipe from './components/SingleRecipe';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
        <Navbar/>
        <Routes>
          <Route path="/" element={<RecipeList/>}/>
          <Route path="category/:categoryId" element={<RecipesByCategoryList/>}/>
          <Route path="recipe/:recipeId" element={<SingleRecipe/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;

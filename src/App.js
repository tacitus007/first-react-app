import React,{useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = "00fac8ba";
  const APP_KEY = "d366030d3b915ad26d0a24adbea5d3a0"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken")

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className = "App">
      <div className = 'intro'>
      <h1>Recipe Suggestion</h1>
      <p>Limit 10 searches per minute</p>
      </div>
      <form onSubmit={getSearch} className = "search-form">
        <input 
        className = "search-bar" 
        type = "text" 
        value= {search} 
        placeholder= "Enter your main ingredient"
        onChange={updateSearch}/>
        <button className = "search-button" type = "submit">Search</button>
      </form>
      <div className= "recipes">
      {recipes.map(recipe => (
        <Recipe
         key={recipe.recipe.label}
         title={recipe.recipe.label}
         calories={(Math.floor(recipe.recipe.calories)) + " kcal"}
         image={recipe.recipe.image}
         link={recipe.recipe.url}
         />
      ))}
      </div>
    </div>
  );
};

export default App;

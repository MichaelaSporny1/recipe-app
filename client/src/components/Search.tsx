import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IRecipe } from "../interfaces";
import RecipeCard from "./RecipeCard";

const RecipeSearch = () => {
    const { searchResult } = useParams()

    const [searchedRecipe, setSearchedRecipe] = useState<IRecipe[]>([]);

    useEffect (() => {
        const getSearchedRecipes = async () => {
            const res = await fetch (`http://localhost:4000/recipes/search/${searchResult}`)
            // const res = await fetch (`${process.env.REACT_APP_API_BASE_URL}/recipes/search/${searchResult}`)
            .then(data => data.json());
            console.log(res, res.data)
            setSearchedRecipe(res);
        }
        getSearchedRecipes();
    }, [])

    return (
        <div>
        <h1>Hej test</h1>
        <input type="text" placeholder="Search"/>
        {searchedRecipe.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)}
        </div>
    )

}

export default RecipeSearch;
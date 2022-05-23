import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { IRecipe } from "../interfaces";
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
`


const RecipeList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [allRecipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect (() => {
        const getSearchedRecipe = async (searchTerm: string) => {
            // const recipes = await fetch(`http://localhost:4000/recipes/search/${searchTerm}`)
            const recipes = await fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes/search/${searchTerm}`)
            .then(res => res.json());
            setRecipes(recipes);
        }
        // getSearchedRecipe(searchTerm);
        
        const loadRecipes = async () => {
            // const recipes = await fetch ('http://localhost:4000/recipes')
            const recipes = await fetch (`${process.env.REACT_APP_API_BASE_URL}/recipes`)
            .then(data => data.json());
            setRecipes(recipes)
        }
        // loadRecipes();


        if(searchTerm) {
            getSearchedRecipe(searchTerm);
        }else{
            loadRecipes();
        }


    }, [searchTerm])

    return (
        <div>
            <input type="text" placeholder="FAN MITT LIV" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
            <StyledWrapper>
                {allRecipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)}
            </StyledWrapper>
        </div>
    )
}

export default RecipeList;
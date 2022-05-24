import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { IRecipe } from "../interfaces";
import styled from 'styled-components';
import Footer from './Footer';
import { getRecipes, getRecipesBySearch } from "../api/requests";

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    padding-top: 1rem;
`

const Input = styled.input`
    width: 15rem;
    border-radius: 5px;
    padding: 0.5rem;
`

const RecipeList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [allRecipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect (() => {
        if(searchTerm) {
            getRecipesBySearch(`${searchTerm}`).then(recipes => {setRecipes(recipes)})
        } else {
            getRecipes().then(recipes => {setRecipes(recipes)})
        }
    }, [searchTerm])

    return (
        <>
            <Input type="text" placeholder="FAN MITT LIV" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
            <StyledWrapper>
                {allRecipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)}
            </StyledWrapper>
            <Footer/>
        </>
    )
}

export default RecipeList;
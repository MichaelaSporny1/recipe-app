import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { IRecipe } from "../interfaces";
import styled from 'styled-components';
import Footer from './Footer';

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
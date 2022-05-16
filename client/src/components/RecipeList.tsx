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
    const [allRecipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect (() => {
        const loadRecipes = async () => {
            const res = await fetch ('http://localhost:4000/recipes')
            .then(data => data.json());
            console.log(res, res.data)
            setRecipes(res)
        }
        loadRecipes();
    }, [])

    return (
        <div>
            <StyledWrapper>
                {allRecipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)}
            </StyledWrapper>
        </div>
    )
}

export default RecipeList;
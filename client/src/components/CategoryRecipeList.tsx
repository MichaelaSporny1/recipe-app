import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
`

const RecipesByCategoryList = () => {
    const [recipes, setRecipes] = useState<any>([]);
    const { category } = useParams()
    useEffect(() => {
        const fetchRecipes = async () => {
            const recipes = await fetch(`http://localhost:4000/categories/${category}/recipes`)
            .then(res => res.json())
            setRecipes(recipes);
        }
        fetchRecipes();
    }, [])
    return (
        <div>
            <StyledWrapper>
                {recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)}
                <p>Testar category route</p>
            </StyledWrapper>
        </div>
    )
}
export default RecipesByCategoryList;
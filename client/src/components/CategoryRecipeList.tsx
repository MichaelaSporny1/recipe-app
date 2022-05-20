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
    const { categoryId } = useParams()
    useEffect(() => {
        const fetchRecipes = async () => {
            // const recipes = await fetch(`http://localhost:4000/categories/${categoryId}/recipes`)
            const recipes = await fetch(`${process.env.REACT_APP_API_BASE_URL}/categories/${categoryId}/recipes`)
            .then(res => res.json())
            setRecipes(recipes);
        }
        fetchRecipes();
    }, [categoryId])
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
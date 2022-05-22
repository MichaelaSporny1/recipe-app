import { useState, useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    
    section {
        width: 30rem;
    }
`

const SingleRecipe = () => {
    const [recipe, setRecipe] = useState<any>({});
    const { recipeId } = useParams()
    useEffect(() => {
        const fetchRecipe = async () => {
        const recipe = await fetch(`http://localhost:4000/recipes/${recipeId}`)
        // const recipe = await fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes/${recipeId}`)
        .then(res => res.json())
        setRecipe(recipe)
        console.log(recipe);
        }
        fetchRecipe();
    }, [])

    return (
        <StyledWrapper>
            <section>
                <img 
                src={recipe.imageUrl} 
                alt={recipe.title}
                width="454"
                height="280" />
            </section>
            <section>
                <h1>{recipe.title}</h1>
                <p>{recipe.description}</p>
                <p>{recipe.timeInMins} Min</p>
                <p>{recipe.ratings} Rating</p>
                <p>INGREDIENTS</p>
                <ul>
                {recipe.ingredients && recipe.ingredients.map((ingredients: any) => (<li key={ingredients.ingredient}>{ingredients.amount} {ingredients.unit} {ingredients.ingredient}</li>))}
                </ul>
                <p>INSTRUCTIONS</p>
                <ol>
                {recipe.instructions && recipe.instructions.map((instructions: any) => (<li key={instructions}>{instructions} </li>))}
                </ol>
            </section>
        </StyledWrapper>
    )
};

export default SingleRecipe;
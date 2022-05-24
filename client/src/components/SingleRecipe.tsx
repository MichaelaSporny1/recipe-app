import { useState, useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import styled from "styled-components";
// import ReactStars from 'react-stars';
import Ratings from './Ratings'
import axios from 'axios';
import Footer from './Footer';

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding-top: 1rem;
    
    .imageSection, .descriptionSection {
        width: 30rem;
        height: 19rem;
        background-color: lightgrey;
        margin-bottom: 1rem;
        padding-top: 1rem;
    };
    .ingredientSection, .instructionSection {
        width: 30rem;
        height: 10rem;
        background-color: lightgrey;
    };
`

const SingleRecipe = () => {
    const [recipe, setRecipe] = useState<any>({});
    const { recipeId } = useParams()
    useEffect(() => {
        const fetchRecipe = async () => {
        // const recipe = await fetch(`http://localhost:4000/recipes/${recipeId}`)
        const recipe = await fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes/${recipeId}`)
        .then(res => res.json())
        setRecipe(recipe)
        // console.log(recipe);
        }
        fetchRecipe();
    }, [recipeId])

    return (
        <>
        <StyledWrapper>
            <div className="imageSection">
                <img 
                src={recipe.imageUrl} 
                alt={recipe.title}
                width="454"
                height="280" />
            </div>
            <div className="descriptionSection">
                <h1>{recipe.title}</h1>
                <p>{recipe.description}</p>
                <p>{recipe.timeInMins} Min</p>
                <span>{recipe.ratings && <Ratings edit={true} recipeId={recipe._id} recipeRating={recipe.ratings} />}</span>
            </div>
            <div className="ingredientSection">
                <p>INGREDIENTS</p>
                <ul>
                {recipe.ingredients && recipe.ingredients.map((ingredients: any) => (<li key={ingredients.ingredient}>{ingredients.amount} {ingredients.unit} {ingredients.ingredient}</li>))}
                </ul>
            </div>
            <div className="instructionSection">
                <p>INSTRUCTIONS</p>
                <ol>
                {recipe.instructions && recipe.instructions.map((instructions: any) => (<li key={instructions}>{instructions} </li>))}
                </ol>
            </div>
        </StyledWrapper>
        <Footer/>
        </>
    )
};

export default SingleRecipe;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Ratings from './Ratings'
import Footer from './Footer';
import { getSingleRecipe } from "../api/requests";

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
        img {
            border-radius: 5px;
        }
    };
    .ingredientSection, .instructionSection {
        width: 22rem;
        min-height: 10rem;
        background-color: lightgrey;
        ul, ol {
            text-align: start;
            margin-left: 1rem;
        }
        h3 {
            text-align: start;
            margin-left: 1rem;
            padding-left: 1.5rem;
        }
    };
`

const SingleRecipe = () => {
    const [recipe, setRecipe] = useState<any>({});
    const { recipeId } = useParams()
    useEffect(() => {
        getSingleRecipe(`${recipeId}`).then(recipe => {setRecipe(recipe)})
    }, [recipeId])

    const[rate, setRate] = useState(false)
    const setRateRecipe = () => {
        setRate(true)
    }

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
                {/* <p>{recipe.ingredients.length} INGREDIENTS | {recipe.timeInMins} MIN</p> */}
                {/* <span>{recipe.ratings && <Ratings edit={true} recipeId={recipe._id} recipeRating={recipe.ratings} />}</span> */}
                {(rate === false) ? <><p>Rate {recipe.title}</p>
                <span onClick={setRateRecipe}>{recipe.ratings && <Ratings edit={true} recipeId={recipe._id} recipeRating={recipe.ratings} />}</span>
                </>: <p>Thank you for rating!</p>}
            </div>
            <div className="ingredientSection">
                <h3>INGREDIENTS</h3>
                <ul>
                {recipe.ingredients && recipe.ingredients.map((ingredients: any) => (<li key={ingredients.ingredient}>{ingredients.amount} {ingredients.unit} {ingredients.ingredient}</li>))}
                </ul>
            </div>
            <div className="instructionSection">
                <h3>INSTRUCTIONS</h3>
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
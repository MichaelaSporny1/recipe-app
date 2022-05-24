import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledRecipeCard = styled.div`
    width: 19rem;
     height: 22rem;
    background-color: lightgrey;
    margin: 1rem;
    border-radius: 5px;
    box-shadow: -1px 2px 5px 1px #9a9a9abf;
    img {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    };
    a {
        text-decoration: none; 
        color: black;
    };   
`

const RecipeCard = ({recipe}: any) => {
    return(
        <div>
        <StyledRecipeCard>
            <Link to={`/recipe/${recipe._id}`}>
            <img 
            src={recipe.imageUrl} 
            alt={recipe.title}
            width="304"
            height="180" />
            <h2>{recipe.title}</h2>
            <p>{recipe.ratings} RATING</p>
            <p>{recipe.ingredients.length} INGREDIENTS | {recipe.timeInMins} MINUTES</p>
            </Link>
        </StyledRecipeCard>
        </div>
    )
}

export default RecipeCard;
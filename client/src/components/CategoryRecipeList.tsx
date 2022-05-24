import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getRecipesByCategory } from "../api/requests";

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
`
const Input = styled.input`
    width: 15rem;
    border-radius: 5px;
    padding: 0.5rem;
`

const RecipesByCategoryList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [recipes, setRecipes] = useState<any>([]);
    const { categoryId } = useParams()

    useEffect(() => {
        // if(searchTerm) {
        //     getRecipeSearchInCategory(`${categoryId}`,`${searchTerm}`).then(recipes => {setRecipes(recipes)})
        // }else {
        getRecipesByCategory(`${categoryId}`).then(recipes => {setRecipes(recipes)})
        // }
    }, [categoryId])
    
    return (
        <>
            {/* <Input type="text" placeholder="FAN MITT LIV" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/> */}
            <StyledWrapper>
                {recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)}
            </StyledWrapper>
        </>
    )
}
export default RecipesByCategoryList;
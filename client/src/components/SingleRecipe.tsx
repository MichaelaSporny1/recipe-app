import { useState, useEffect } from "react";
import { Params, useParams } from "react-router-dom";


const SingleRecipe = () => {
    const [recipe, setRecipe] = useState<any>({});
    const { recipeId } = useParams()
    useEffect(() => {
        const fetchRecipe = async () => {
        const recipe = await fetch(`http://localhost:4000/recipes/${recipeId}`)
        .then(res => res.json())
        setRecipe(recipe)
        console.log(recipe);
        }
        fetchRecipe();
    }, [])
    // })

    return (
        <div>
            Hej
            <p>{recipe.title}</p>
        </div>
    )
};

export default SingleRecipe;
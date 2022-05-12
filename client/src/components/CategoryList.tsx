import { useState, useEffect } from "react";


//CATEGORY
const CategoryList = () => {
    const [recipes, setRecipes] = useState<any>([]);
    useEffect(() => {
        const fetchRecipes = async () => {
            const recipes = await fetch('http://localhost:4000/recipes')
            .then(res => res.json())
            setRecipes(recipes);
        }
        fetchRecipes();
    }, [])
    return (
        <div>
            <h1>{recipes.map((recipe: any) => recipe.category)}</h1>
        </div>
    )
}
export default CategoryList;
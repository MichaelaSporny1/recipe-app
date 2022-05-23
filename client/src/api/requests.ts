import axios from 'axios';

axios.defaults.baseURL = `${process.env.REACT_APP_API_BASE_URL}`;

export async function postRating(recipeId: any, rating: any) {
    try{
        const response = await axios.post(`/recipes/${recipeId}/ratings`, {
            ratings: rating})
        return response
    } catch (error: any) {
        return error.response
    }
}

// export async function getAllRecipes() {
    // const recipes = await axios.get('/recipes');
    // return recipes;
// }
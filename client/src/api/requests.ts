import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

export async function getAllRecipes() {
    const recipes = await axios.get('/recipes');
    return recipes;
}
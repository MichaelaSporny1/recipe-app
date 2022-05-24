import axios from 'axios';

axios.defaults.baseURL = `${process.env.REACT_APP_API_BASE_URL}`;


export const getRecipes = async () => {
  const recipes = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/recipes`)
  return recipes.data
}

export const getRecipesBySearch = async (searchTerm: string) => {
  const recipes = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/recipes/search/${searchTerm}`)
  return recipes.data
}

export const getSingleRecipe = async (recipeId: string) => {
  const recipe = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/recipes/${recipeId}`)
  return recipe.data
}

export const getRecipesByCategory = async (categoryId: string) => {
  const recipes = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories/${categoryId}/recipes`)
  return recipes.data
}

export const getCategories = async () => {
  const categories = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories`)
  return categories.data
}

// export const getRecipeSearchInCategory = async (categoryId: string, searchTerm: string) => {
//   const recipe = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories/${categoryId}/recipes/search/${searchTerm}`)
//   return recipe.data
// }





export const postRating = async(recepieId: string, rating: object) =>{
    console.log(rating, "hallåååååå")
    try{
      const postedRating = await axios.post(`/recipes/${recepieId}/ratings`, rating)
      return postedRating
    }catch(error: any){
      return error.response;
    }
    }

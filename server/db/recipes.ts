import RecipeModel from "./models/recipes"

export const getRecipes = async () => {
    const recipes = await RecipeModel.find()
    return recipes
}

export const getRecipeById = async (id: String) => {
    const recipe = await RecipeModel.findById(id);
    return recipe;
}

export const getRecipesBySearch = async (search: string) => {
    const recipes = await RecipeModel.find({
             "title": { $regex: search, $options: 'i'}
    })
    return recipes
}

export const ratingById = async (id: any, rating: any) => {
    const recipe = await RecipeModel.findOneAndUpdate(
        {_id: id},
        {$push: {ratings: rating}}
    );
}

  
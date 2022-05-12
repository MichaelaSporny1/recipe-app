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

export const addRecipe = async (recipe: any) => {
    const recipes = new RecipeModel(recipe)
    await recipes.save()
    return recipes
}


// export const addTransaction = async (transaktion: TransactionType) => {
//     const transaction = new TransactionModel(transaktion)
//     await transaction.save()
//     return transaction
//   }
  
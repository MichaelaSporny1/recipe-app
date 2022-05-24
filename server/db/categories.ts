import RecipeModel from "./models/recipes"

export const getCategories = async () => {
    const categories = await RecipeModel.aggregate([
        { $match: { }},
        { $unwind: '$category'},
        { $group: { _id: '$category', count: { $sum: 1}}},
        { $sort: {count: -1}}
    ]);
    return categories;
}

export const getRecipeByCategory = async (category: String) => {
    const recipes = await RecipeModel.find({category: category});
    return recipes;
}

export const getRecipesByCategorySearch = async (category: String) => {
    const foundRecipe = await RecipeModel.find({
        category: { '$regex': category, '$options': 'i'}
    })
    return foundRecipe
}
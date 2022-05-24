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

// export const postRating = async (recipeId: String, rating: Number) => {
//     const newRating = await RecipeModel.findById(recipeId);
//     if (!newRating) {
//       throw "404";
//     } else {
//       newRating.ratings.push(rating);
//       await newRating.save();
//       return newRating;
//     }
//   };
  
  export const postRating = async (recipeId: String, rating: Number) => {
    const recipe = await RecipeModel.findOneAndUpdate(
      {_id: recipeId},
      { $push: { ratings: rating}}
    )
    
    // const newRating = await RecipeModel.findOneAndUpdate(recipeId);
    // if (!newRating) {
    //   throw "404";
    // } else {
    //   newRating.ratings.push(rating);
    //   await newRating.save();
    //   return newRating;
    // }
  };
import express, { Request, Response } from 'express';
import { getRecipes, getRecipeById, getRecipesBySearch, postRating } from '../db/recipes';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const responseRecipes = await getRecipes();
    res.status(200).json(responseRecipes);
})

router.get('/:recipeId', async (req: Request, res: Response) => {
    const choosenRecipe = await getRecipeById(req.params.recipeId);
    res.status(200).json(choosenRecipe);
})

router.get('/search/:query', async (req: Request, res: Response) => {
    const searchedRecipes = await getRecipesBySearch(req.params.query);
    res.status(200).json(searchedRecipes)
})

router.post('/:recipeId/ratings', async (req: Request, res: Response) => {
    const recipe = await postRating(req.params.recipeId, req.body.ratings);
    res.status(200).json(recipe)
})

export default router;

// var mongoose = require('mongoose');
// console.log(mongoose.connection.readyState, "testar connection");
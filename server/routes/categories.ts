import express, { Request, Response } from 'express';
import { getCategories, getRecipeByCategory, getRecipesByCategorySearch } from '../db/categories';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const selectedCategories = await getCategories();
    res.status(200).json(selectedCategories);
})

router.get('/:category', async (req: Request, res: Response) => {
    const selectedCategory = await getRecipeByCategory(req.params.category);
    console.log(req.params.category, "testar by category");
    res.status(200).json(selectedCategory);
})

router.get('/:categoryName/recipes', async (req: Request, res: Response) => {
    const category = await getRecipesByCategorySearch(req.params.categoryName)
    res.status(200).json(category)
})

// router.get('/:categoryName/:query', async (req: Request, res: Response) => {
//     const searchedRecipe = await getRecipeInCategory(req.params.categoryName, req.params.query)
//     res.status(200).json(searchedRecipe)
// })

export default router;

// var mongoose = require('mongoose');
// console.log(mongoose.connection.readyState, "testar connection");
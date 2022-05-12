import express, { Request, Response } from 'express';
import { getCategories, getRecipeByCategory, getRecipesByCategorySearch } from '../db/categories';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const selectedCategories = await getCategories();
    res.status(200).json(selectedCategories);
    // res.json(selectedRecipes);
});

router.get('/:category', async (req: Request, res: Response) => {
    const selectedCategory = await getRecipeByCategory(req.params.category);
    console.log(req.params.category, "testar by category");
    res.status(200).json(selectedCategory);
})

router.get('/:categoryName/recipes', async (req: Request, res: Response) => {
    const category = await getRecipesByCategorySearch(req.params.categoryName)
    res.status(200).json(category)
})


// router.get('/categories/:category', async (req: Request, res: Response) => {
//     const responseCategoryRecipes = await getRecipesByCategory();
//     res.status(200).json(responseCategoryRecipes);
// })

export default router;

// var mongoose = require('mongoose');
// console.log(mongoose.connection.readyState, "testar connection");
import { Schema, model } from 'mongoose';

export interface IRecipe {
    title: string;
    description: string;
    imageUrl: string;
    timeInMins: number;
    ratings: number[];
    category: string[];
    // ingredients: [{ingredient:string, amount:number, unit:string}];
    ingredients: any;
    // instructions: [string];
    instructions: any;
}

const recipeSchema = new Schema<IRecipe>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    timeInMins: { type: Number, required: true },
    ratings: { type: [Number], required: true },
    category: { type: [String], required: true },
    // ingredients: { type: [Array], required: true },
    ingredients: { type: Array, required: true },
    // instructions: { type: [Array], required: true }
    instructions: { type: Array, required: true }
})

const RecipeModel = model<IRecipe>('recipe', recipeSchema);

export default RecipeModel;
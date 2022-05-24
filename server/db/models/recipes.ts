import { Schema, model } from 'mongoose';

export interface IRecipe {
    _id?: String;
    title: String;
    description: String;
    imageUrl: String;
    timeInMins: Number;
    ratings: Array<Number>;
    category: Array<string>;
    ingredients: [{ingredient:string, amount:number, unit:string}];
    instructions: Array<String>;
}

const recipeSchema = new Schema<IRecipe>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    timeInMins: { type: Number, required: true },
    ratings: { type: [Number], required: true },
    category: { type: [String], required: true },
    ingredients: { type: [Object], required: true },
    instructions: { type: [String], required: true }
})

const RecipeModel = model<IRecipe>('recipe', recipeSchema);

export default RecipeModel;
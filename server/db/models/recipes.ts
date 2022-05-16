import { Schema, model } from 'mongoose';

// export interface IRecipe {
//     title: string;
//     description: string;
//     imageUrl: string;
//     timeInMins: number;
//     ratings: number[];
//     category: string[];
//     // ingredients: [{ingredient:string, amount:number, unit:string}];
//     ingredients: any;
//     // instructions: [string];
//     instructions: any;
// }

export interface IRecipe {
    _id: String;
    title: String;
    description: String;
    imageUrl: String;
    timeInMins: Number;
    // ratings: number[];
    ratings: Array<number>;
    // category: string[];
    category: Array<string>;
    ingredients: [{ingredient:string, amount:number, unit:string}];
    // ingredients: any;
    // instructions: [string];
    instructions: Array<String>;
    // instructions: any;
}



const recipeSchema = new Schema<IRecipe>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    timeInMins: { type: Number, required: true },
    ratings: { type: [Number], required: true },
    category: { type: [String], required: true },
    // ingredients: { type: [Array], required: true },
    // ingredients: { type: Array, required: true },
    ingredients: { type: [Object], required: true },
    // instructions: { type: [Array], required: true }
    // instructions: { type: Array, required: true }
    instructions: { type: [String], required: true }
})

const RecipeModel = model<IRecipe>('recipe', recipeSchema);

export default RecipeModel;
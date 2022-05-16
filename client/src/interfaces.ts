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
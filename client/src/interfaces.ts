export interface IRecipe {
    _id: String;
    title: String;
    description: String;
    imageUrl: String;
    timeInMins: Number;
    ratings: Array<number>;
    category: Array<string>;
    ingredients: [{ingredient:string, amount:number, unit:string}];
    instructions: Array<String>;
    // ratings: number[];
    // category: string[];
    // ingredients: any;
    // instructions: [string];
    // instructions: any;
}
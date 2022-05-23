import express, { Request, Response, json } from 'express';
import recipeRouter from './routes/recipes';
import categoryRouter from './routes/categories'
import { connect } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()

connect(`${process.env.MONGODB_CONNECTION_STRING}`);

// connect('mongodb+srv://michaela:tyEVJwjCrzGq1Ws8@cluster0.iux78.mongodb.net/recipes?retryWrites=true&w=majority')
// connect('mongodb://localhost:27017/recipes')

const app = express()
app.use(cors());
app.use(json());

const port = process.env.PORT || 4000


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use('/recipes', recipeRouter)
app.use('/categories', categoryRouter)
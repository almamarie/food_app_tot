import express from 'express';
import mongoose from 'mongoose';
import { connectMongoDb } from './configs/db.js';
import {foodRoutes} from './routes/foodRoutes.js';
import {categoriesRoutes} from './routes/categoriesRoutes.js'

const app = express();

// get the body of a request using this middleware
app.use(express.json());
app.use("/foods", foodRoutes)
app.use("/categories", categoriesRoutes)

const port = 5006;




// Welcome to our food delivery app
app.get('/', (req, res)=>{
    res.send("Welcomwe to our delevery app")
});



connectMongoDb();

app.listen(port, () => console.log("server is up and running"));


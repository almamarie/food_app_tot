import mongoose from 'mongoose';
import dotenv from 'dotenv';

// configure dotenv before using it.
dotenv.config();

const DB_URL = process.env.DB_URL;

export async function connectMongoDb(){
    try {

        await mongoose.connect(DB_URL, {})
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(`Couldn't connect to MongoDB ${error}`)
    }
    
}

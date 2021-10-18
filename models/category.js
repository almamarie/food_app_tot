import mongoose from "mongoose";

const {Schema, model} = mongoose;


const categorySchema = Schema({
    image: String,
    name: String,
});

export const CategoryModel = model('categoryCollection', categorySchema)
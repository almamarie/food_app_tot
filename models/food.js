// import mongoose from the package we installed

import mongoose from 'mongoose';


// extract these from the mongoose package
// pro tip: read more on array destructuring in js
const {Schema, model} = mongoose;


// create a food schema
const foodSchema = Schema({
    image:String,
    foodName: String,
    category: {type: Schema.Types.ObjectId, ref: 'categoryCollection'},
    price: Number,
    rating: Number,
    reviewsCount: Number,
    ingredients: String,
    Description: String,
})

export const FoodModel = model('foodCollection', foodSchema);

// This is an example of a named export
// export const FoodModel = model('foodCollection', foodSchema);

// This is an example of a default export
// export default FoodModel
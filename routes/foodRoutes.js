import express from 'express'
import { createNewFood, deleteFood, getAllFoods, getAllFoodsByCategoriesId, updateFood } from '../controllers/food_controllers.js';

const route = express.Router()

route.route("/").get(getAllFoods).post(createNewFood)

route.route("/:id").patch(updateFood).delete(deleteFood)

route.route("/:categoryID").get(getAllFoodsByCategoriesId)

// // Fetch all foods
// route.get('/foods', getAllFoods);


// //fetch all foods by categories
// route.get("/foods/:categoryID", getAllFoodsByCategoriesId)


// // Create a new food
// route.post('/foods/', createNewFood);


// // Patch food
// route.patch('/foods/:id', updateFood);


// // Delete food
// route.delete('/foods/:id', deleteFood);


export const foodRoutes = route;
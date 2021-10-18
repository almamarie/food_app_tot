import express from 'express';
import {updateCategory, getAllCategories, createNewCategory, deleteCategory} from '../controllers/categories_controllers.js'

const route = express.Router()

route.route("/").get(getAllCategories).post(createNewCategory)
route.route("/:id").patch(updateCategory).delete(deleteCategory)

// // List all categories
// app.get('/categories', getAllCategories);

// // Create a new category
// app.post('/categories/', createNewCategory);


// // Patch a category
// app.patch('/categories/:id', updateCategory);


// // Delete a category
// app.delete('/categories/:id', deleteCategory);

export const categoriesRoutes = route;
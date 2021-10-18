import { CategoryModel } from "../models/category.js";


/// Categories//////

// Get all categories
const getAllCategories = async (req, res) => {
    try {
        const food = await CategoryModel.find({});
        res.json(food);
    } catch (error) {
        console.log("Something went wrong: ", error)
        res.send(400).send(`Failed to fetch data ${error}`);
    }
}



// create new Category
const createNewCategory = async (req, res) => {
    try {
        
        const newFood = await CategoryModel.create({...req.body});
        return res.json(newFood)

    } catch (error) {
        console.log(`Something went wrong ${error}`);
        res.status(400).send(`Failed to create new food ${error}`);
    }
    
}


// Update Category
const updateCategory = async (req, res) => {
    try {
        
        const newFood = await CategoryModel.findByIdAndUpdate(req.params.id, {...req.body});
        return res.json(newFood)

    } catch (error) {
        console.log('Something went wrong');
        res.status(400).send("Failed to update food");
    }
    
}



// delete Category

const deleteCategory = async (req, res) => {
    try {
        
        await CategoryModel.findByIdAndDelete(req.params.id, {...req.body});
        return res.send("Category is deleted");

    } catch (error) {
        console.log('Something went wrong');
        res.status(400).send("Failed to delete food");
    }
    
}


export {
    getAllCategories,
    createNewCategory,
    updateCategory,
    deleteCategory
}
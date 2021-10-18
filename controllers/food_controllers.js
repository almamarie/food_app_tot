import { FoodModel } from "../models/food.js";

// get all foods
const getAllFoods = async (req, res) => {
    try {
        const food = await FoodModel.find({});
        res.json(food);
    } catch (error) {
        console.log("Something went wrong: ", error)
        res.send(400).send(`Failed to fetch data ${error}`);
    }
}

// get all foods by categories
const getAllFoodsByCategoriesId = async(req, res) => {
    try {
        const foodList = await FoodModel.find({category: req.params.categoryID});
        res.json(foodList);
    } catch (error) {
        console.log("Something went wrong: ", error)
        res.send(400).send(`Failed to fetch data ${error}`);
    }
}

// create a new foods
const createNewFood = async (req, res) => {
    try {
        
        const newFood = await FoodModel.create({...req.body});
        return res.json(newFood)

    } catch (error) {
        console.log(`Something went wrong ${error}`);
        res.status(400).send(`Failed to create new food ${error}`);
    }
    
}

// update a food
const updateFood = async (req, res) => {
    try {
        
        const newFood = await FoodModel.findByIdAndUpdate(req.params.id, {...req.body});
        return res.json(newFood)

    } catch (error) {
        console.log('Something went wrong');
        res.status(400).send("Failed to update food");
    }
    
}



// delete a food

const deleteFood = async (req, res) => {
    try {
        
        await FoodModel.findByIdAndDelete(req.params.id, {...req.body});
        return res.send("Food is deleted");

    } catch (error) {
        console.log('Something went wrong');
        res.status(400).send("Failed to delete food");
    }
    
}


export {
    getAllFoods,
    getAllFoodsByCategoriesId,
    createNewFood,
    deleteFood,
    updateFood
}
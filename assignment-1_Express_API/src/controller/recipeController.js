/**
 * File: recipeController.js
 * Author: Sunil Balami
 * StudentID: 200578456
 * Date: 2024-09-29
 */

const Recipe = require('../models/recipeModel');
const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        // res.json("I am here sending respinsess");
        res.status(200).json(recipes);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to get recipes', error: error.message });
    }
}


const createRecipe = async (req, res) => {
    const { recipeName, ingredients, cookingTime, difficulty, cuisine, description, photoLink, averageRating } = req.body;
    const newRecipe = new Recipe({
        recipeName,
        ingredients,
        cookingTime,
        difficulty,
        cuisine,
        description,
        photoLink,
        averageRating
    });
    // res.json("sunil")
    try {
        const savedData  = await newRecipe.save();
        res.status(201).json(savedData)
    }
    catch (error){
        res.status(400).json({ message: 'Failed to create recipe', error: error.message });
    }

}


module.exports = {getAllRecipes, createRecipe};
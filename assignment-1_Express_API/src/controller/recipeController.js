const Recipe = require('../models/recipeModel');


const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        // res.json("I am here sending respinses");
        res.status(200).json(recipes);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to get recipes', error: error.message });
    }
}
module.exports = {getAllRecipes};
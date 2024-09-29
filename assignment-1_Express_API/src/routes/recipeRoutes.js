const express  = require('express');
const router = express.Router();

const {getAllRecipes, createRecipe} = require('../controller/recipeController')

router.get('/recipes', getAllRecipes);

router.post('/recipes', createRecipe);


module.exports = router;
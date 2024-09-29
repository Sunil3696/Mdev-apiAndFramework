const express  = require('express');
const router = express.Router();

const {getAllRecipes} = require('../controller/recipeController')

router.get('/recipes', getAllRecipes);


module.exports = router;
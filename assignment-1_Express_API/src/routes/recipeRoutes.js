/**
 * File: recipeRoutes.js
 * Author: Sunil Balami
 * StudentID: 200578456
 * Date: 2024-09-29
 */
const express  = require('express');
const router = express.Router();

const {getAllRecipes, createRecipe} = require('../controller/recipeController')

router.get('/recipes', getAllRecipes);

router.post('/recipes', createRecipe);


module.exports = router;
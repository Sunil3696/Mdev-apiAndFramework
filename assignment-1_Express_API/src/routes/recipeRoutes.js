/**
 * File: recipeRoutes.js
 * Author: Sunil Balami
 * StudentID: 200578456
 * Date: 2024-09-29
 * Description: Routes is to handle the recipe related requsted and route them to correct controller
 */
const express  = require('express');
const router = express.Router();

const {getAllRecipes, createRecipe} = require('../controller/recipeController')
/**
 * Creating a get method route to get all the recipes from the database
 * Controller function L getAllRecipes
 */
router.get('/recipes', getAllRecipes);

/**
 * Creating a get method route to create document in mondodb database
 * Controller function L createRecipe
 */
router.post('/recipes', createRecipe);


module.exports = router; //exporting router
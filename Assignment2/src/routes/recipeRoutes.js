/**
 * File: recipeRoutes.js
 * Author: Sunil Balami
 * StudentID: 200578456
 * Date: 2024-10-13
 * Description: Routes is to handle the recipe related requsted and route them to correct controller
 */

const express = require('express');
const router = express.Router();
const {getAllRecipes, createRecipe, getRecipeByID} = require('../controller/recipeController')

router.get('/', getAllRecipes);

router.post('/', createRecipe);

router.get('/:id', getRecipeByID);


module.exports = router; //exporting router
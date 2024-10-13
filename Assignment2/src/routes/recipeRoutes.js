/**
 * File: recipeRoutes.js
 * Author: Sunil Balami
 * StudentID: 200578456
 * Date: 2024-10-13
 * Description: Routes is to handle the recipe related requsted and route them to correct controller
 */

const express = require("express");
const router = express.Router();
const { validateRecipe } = require("../middleware/middleware");
const {
  getAllRecipes,
  createRecipe,
  getRecipeByID,
  deleteRecipeById,
  updateRecipe,
} = require("../controller/recipeController");

//registering routes here
router.get("/", getAllRecipes);

router.post("/", validateRecipe, createRecipe);

router.get("/:id", getRecipeByID);

router.delete("/:id", deleteRecipeById);

router.put("/:id", validateRecipe, updateRecipe);

module.exports = router; //exporting router

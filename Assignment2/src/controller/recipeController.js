/**
 * File: recipeController.js
 * Author: Sunil Balami
 * StudentID: 200578456
 * Date: 2024-10-13'
 * Desc: This is a controller page and it will have the function that is directly related to the handle te recipe operation like
 * fetching, deleting, creating, manipulating documents on the mongodb.
 */

const Recipe = require("../models/recipeModel");

/**
 * Desc: getAllrecepis from the mongodb database
 *Parameter:
 *   req : what user sends (current nothing)
 *   res : What user gets after execution of this function
 */
 const getAllRecipes = async (req, res) => {
    try {
      const recipes = await Recipe.find();
      // res.json("I am here sending respinsess");
      res.status(200).json(recipes);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to get recipes", error: error.message });
    }
  };

/**
 * Desc: Function createRecipe is to handle the create operation ro Mongodb
 *Parameter:
 *   req : JSON body of Recipe data like recipeName, cookingTime etc
 *   res : The whole object that is created or the error body.
 */
 const createRecipe = async (req, res) => {
    const {
      recipeName,
      ingredients,
      cookingTime,
      difficulty,
      cuisine,
      description,
      photoLink,
      averageRating,
    } = req.body;
    //creating new instance of the Recipe model with data on it
    const newRecipe = new Recipe({
      recipeName,
      ingredients,
      cookingTime,
      difficulty,
      cuisine,
      description,
      photoLink,
      averageRating,
    });
    // res.json("sunil")
    try {
      const savedData = await newRecipe.save(); //saving data to the Database.
      res.status(201).json(savedData);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Failed to create recipe", error: error.message });
    }
  };



  module.exports = { getAllRecipes, createRecipe };
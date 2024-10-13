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



  module.exports = { getAllRecipes };
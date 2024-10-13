
/**
 * Desc: Middleware that checks if all the fields are not empty
 *Parameter:
 *   req : recipe contents
 *   res :check the condition and if any of the fileds are empty then return error ot go for another middleware
 */
const validateRecipe = (req, res, next) => {
    const { recipeName, ingredients, cookingTime,difficulty, cuisine, description,photoLink,averageRating } = req.body;

    // Check for missing or empty fields
    if (!recipeName || !ingredients || !cookingTime || !difficulty || !cuisine || !description || !averageRating ) {
        return res.status(400).send('Missing any of the required fileds recipeName, ingredients, cookingTime,difficulty, cuisine, description,photoLink,averageRating');
    }


    next()

}

module.exports ={validateRecipe}
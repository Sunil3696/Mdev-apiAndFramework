const express = require('express');
const router = express.Router();
const {validateUser} = require("../middleware/middleware")
const {registerUser, loginUser, logoutUser} = require("../controller/userController");

//registering routes here
router.post('/register',validateUser, registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser)

module.exports = router; //exporting router
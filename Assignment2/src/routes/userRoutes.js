const express = require('express');
const router = express.Router();
const {registerUser} = require("../controller/userController");


router.get('/', registerUser);


module.exports = router; //exporting router
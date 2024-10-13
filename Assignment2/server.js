/**
 * File: server.js
 * Author: Sunil Balami
 * StudentID: 200578456
 * Date: 2024-09-29
 * Description: This is the main entry point of application. It create the server and connect itself to Mongodb
 */

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3000;


//parshing JSON requests
app.use(express.json());


app.use('/api', recipeRoutes); //Base URL
//Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

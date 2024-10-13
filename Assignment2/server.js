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
const MongodbURI = "mongodb+srv://sunil:sunil123@cluster0.df1iq.mongodb.net/";

/**Mongodb Connection
 * Connect to mongo db with given URI for the varioud Database operations
 **/
mongoose.connect(MongodbURI,{

    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Success fully Connected to MongoDB'))
.catch((err) => console.error(err));

//parshing JSON requests
app.use(express.json());

//Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

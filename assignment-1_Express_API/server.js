/**
 * File: server.js
 * Author: Sunil Balami
 * StudentID: 200578456
 * Date: 2024-09-29
 */
const express  = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./src/routes/recipeRoutes');

const app = express();

const PORT = process.env.PORT || 3000;
const MongodbURI = "mongodb+srv://sunil:sunil123@cluster0.df1iq.mongodb.net/";

mongoose.connect(MongodbURI,{

    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Success fully Connected to MongoDB'))
.catch((err) => console.error(err));

app.use(express.json());

// testing route
// app.get('/test', (req, res) => {
//     res.send('I am testing')
//   });

app.use('/api', recipeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

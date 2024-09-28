const express  = require('express');
const mongoose = require('mongoose');
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
app.get('/test', (req, res) => {
    res.send('I am testing')
  })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

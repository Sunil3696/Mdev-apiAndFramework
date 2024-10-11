const Movie = require('../models/Movies');
const fs =require('fs');

//Function to get all the files
// exports.getMovies = async(req,res)=>{
//     try{
//         const movies = await Movie.find();
//          res.status(200).json(movies);
//     }
//     catch(e){
//             console.error(e);
//             res.status(500).send('Error retrieving Movies');
//     }
// };

//version 1 of movie search by title
// exports.getMovies = async(req,res)=>{
//         // console.log(req.query.title);
//         // return;
//         try {
//             let filter = {};
//             if(req.query.title) {
//                 //adding query title to the filter and making the filter incase sensitive
//                 filter.title = new RegExp(req.query.title, 'i');
//                 let movies = await Movie.find(filter);
//                     if(movies.length > 0){
//                         // returning movies data
//                         res.status(200).send(movies);
//                     } else {
//                         res.status(404).send("No movie found with that title");
//                     }
//             }

//             else {
//                 //returning all movies (same code as previos version)
//                 try{
//                             const movies = await Movie.find();
//                              res.status(200).json(movies);
//                         }
//                         catch(e){
//                                 console.error(e);
//                                 res.status(500).send('Error retrieving Movies');
//                         }
//             }
//         }
//         catch (error) {
//             console.error('Error fetching movies:', error);
//             res.status(500).send({ message: 'Error retrieving movies' });
//         }

// }

exports.getMovies = async(req,res)=>{
    try {
        let filter = {};
        if (!req.query.title && !req.query.genre && !req.query.year) {
            try{
                        const movies = await Movie.find();
                         res.status(200).json(movies);
                    }
                    catch(e){
                            console.error(e);
                            res.status(500).send('Error retrieving Movies');
                    }
        }


        if(req.query.title) {
            //adding query title to the filter and making the filter incase sensitive
            filter.title = new RegExp(req.query.title, 'i');
        }
        if (req.query.genre) {
            filter.genres = req.query.genre;
        }
        if(req.query.year){
            filter.year = Number(req.query.year);
        }

        //  console.log(filter)
        const movies = await Movie.find(filter);

        res.status(200).send(movies);

    

        // console.log(filter)
        // return
    }
    catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).send({ message: 'Error retrieving movies' });
    }

}






//Function to create a new movie
exports.createMovie = async(req,res)=>{
    try{
        const newMovie = new Movie(req.body);
        await newMovie.save();
         res.status(201).json(newMovie);
    }
    catch(e){
            console.error(e);
            res.status(500).send('Error creating Movies');
    }
};


//Get a single movie by Id
exports.getMovieById = async(req,res) =>{
try{
    const movie = await Movie.findById(req.params.id);
    // console.log(req.params);
    // return ;
    if(!movie){
        return res.status(404).send('Movie is not found');
    }
    res.status(201).json(movie);

}
catch(e){
    console.error(e);
    res.status(500).send('Error retrieving the Movies');
}
};


//update Movie

//Get a single movie by Id
exports.updateMovie = async(req,res) =>{
    try{
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updatedMovie){
            return res.status(404).send('Movie is not updated');
        }
        res.status(201).json(updatedMovie);
    
    }
    catch(e){
        console.error(e);
        res.status(500).send('Error uodating the Movies');
    }
    };


    //Delete a single movie by Id
exports.deleteMovie = async(req,res) =>{
    try{
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        if(!deletedMovie){
            return res.status(404).send('Movie not found');
        }
        res.status(201).json(deletedMovie);
    
    }
    catch(e){
        console.error(e);
        res.status(500).send('Error deleting the Movies');
    }
    };

    // Function to import movies (moved from index.js)
exports.importMovies = async (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync('./movies.json', 'utf-8')); // Read data from movies.json
        const count = await Movie.countDocuments();
        if (count === 0) {
            await Movie.create(data); // Create movies in the database
            console.log('Data successfully imported to MongoDb');
            res.status(200).send('Data successfully imported');
        } else {
            res.status(200).send('Data already exists, skipping import');
        }
    } catch (e) {
        console.error('Error importing data', e);
        res.status(500).send('Error importing data');
    }
};

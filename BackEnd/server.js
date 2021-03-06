const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// determine path and work out build folder
// serve the static files from the React app
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// // to use cors
// app.use(cors())
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse appplication/json
app.use(bodyParser.json())

// connect to mongodb
const myConnectionString = 'mongodb+srv://admin:admin@cluster0.ovjly.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

// schema for database
const Schema = mongoose.Schema;

var movieSchema = new Schema({
    title: String,
    year: String,
    poster: String
});

// create model for database for interaction
var MovieModel = mongoose.model("movie", movieSchema)

// get request from url, in this case '/' = home page/domain
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// get request from /api/movies and response with mymovies json
app.get('/api/movies', (req, res) => {
    // // store json
    // const mymovies = [
    //     {
    //         "Title": "Avengers: Infinity War",
    //         "Year": "2018",
    //         "imdbID": "tt4154756",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Captain America: Civil War",
    //         "Year": "2016",
    //         "imdbID": "tt3498820",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "World War Z",
    //         "Year": "2013",
    //         "imdbID": "tt0816711",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    //     }, {
    //         "Title": "War of the Worlds",
    //         "Year": "2005",
    //         "imdbID": "tt0407304",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
    //     }
    // ]

    // find doc in database
    MovieModel.find((err, data) => {
        res.json(data);
    })

    // // pass it to server
    // res.status(200).json({
    //     message: "Everything is ok",
    //     movies: mymovies
    // });
})

// returns data (movies) in that id
app.get('/api/movies/:id', (req, res) => {
    console.log(req.params.id)

    // interaction to get data
    MovieModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

// post request
app.post('/api/movies', (req, res) => {
    console.log('Movie Received!');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

    // interact to create
    MovieModel.create({
        title: req.body.title,
        year: req.body.year,
        poster: req.body.poster
    })

    // server to client to prevent duplicate creation
    res.send('Item Added');
})

// return movie with specific id
app.get('/api/movies/:id', (req, res) => {
    console.log(req.params.id)

    MovieModel.findById(req.params.id, (err, data) => {
        // Send data from database
        res.json(data)
    })
})

// update movie with a new id
app.put('/api/movies/:id', (req, res) => {
    console.log("Update movie: " + req.params.id)
    console.log(req.body)

    MovieModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data)
        })
})

// listen from http that has delete method
app.delete('/api/movies/:id', (req, res) => {
    console.log("Deleting: " + req.params.id);

    // delete record
    MovieModel.deleteOne({ _id: req.params.id },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        })
})

// handles any requests that don't match the ones above
// send html file from build folder
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
    });    

// listen from port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

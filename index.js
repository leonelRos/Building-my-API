var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
require("dotenv/config")

//middlewares: specified the routes
app.use(bodyParser.json());
app.use(cors());
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
  res.send('we are home')
})

// connect database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
 console.log('connected to DB!')
);

// create a GET request that returns an array of users
// app.get("/", (req, res, next) =>{
//   res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
// })

// the index file will be running in port 3000
app.listen(3000);

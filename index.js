var express = require("express");
var app = express();

// create a GET request that returns an array of users
app.get("/url", (req, res, next) =>{
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
})

// the index file will be running in port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

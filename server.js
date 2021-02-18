"use strict";
require("dotenv").config(); // install dotenv to put keys of API
const express = require("express"); // create variable called express to use express library
const app = express(); // to make server use express library
const PORT = process.env.PORT || 3000; // to open server and deploy on heroku or port 3000

app.use(express.static("./public")); // to access static files and folders in the public

app.get("/hello", (request, response) => {
  // get data from this route which is name hello
  response.status(200).send("Hello"); // response message which appear on browser
});

app.get("/data", (request, response) => {
  // create a new route to get data from it
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: "Well Trained",
  };
  response.status(200).json(airplanes);
});

app.use("*", (request, response) =>
  response.send("Sorry, that route does not exist.")
);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); //app.listen means server wait a requset on this port number
// require('dotenv').config();
// const express = require('express');
// const app = express();

// const PORT = process.env.PORT || 3000;

// app.use(express.static('./public'));

// app.get('/hello', (request, response) => {
//   response.status(200).send('Hello');
// });

// app.get('/data', (request, response) => {
//   let airplanes = {
//     departure: Date.now(),
//     canFly: true,
//     pilot: 'Well Trained',
//   };
//   response.status(200).json(airplanes);
// });

// app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));

// app.listen(PORT,() => console.log(`Listening on port ${PORT}`));

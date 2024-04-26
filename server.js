"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const fccTesting = require("./freeCodeCamp/fcctesting.js");
const app = express();
const bcrypt = require("bcrypt");

fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = "sUperpassw0rd!";
const someOtherPlaintextPassword = "pass123";

//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
  console.log("Async Hash:", hash);
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    /*res == true or false*/
    console.log("Async Password matches hash:", res);
  });
});
//END_ASYNC

//START_SYNC
var hashSync = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log("Sync Hash:", hashSync);

var resultSync = bcrypt.compareSync(myPlaintextPassword, hashSync);
console.log("Sync Password matches hash:", resultSync);
//END_SYNC

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});

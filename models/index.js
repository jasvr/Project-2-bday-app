const mongoose = require('../db/connection')

const Guest = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    cellNumber: String, 
    agree: Boolean
});

module.exports = mongoose.model("Guest", Guest);

//to connect to db have to through this object
//"Guest" is model
//Guest is schema
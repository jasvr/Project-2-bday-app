const mongoose = require('../db/connection')
const Schema = mongoose.Schema;
const uuid = require('uuid/v4')

const GuestWaiver = new mongoose.Schema({
    id: {type: String, index: true, unique: true, default: uuid},
    firstName: String,
    lastName: String,
    email: String,
    cellNumber: String, 
    agree: Boolean
});



module.exports = mongoose.model("GuestWaiver", GuestWaiver);

//to connect to db have to through this object
//"Guest" is model
//Guest is schema
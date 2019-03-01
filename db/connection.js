// db/connection.js
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/guest")

module.exports = mongoose


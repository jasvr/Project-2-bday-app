const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.render("index");
});

router.use('/waivers', require('./waivers.routes'));

module.exports = router;
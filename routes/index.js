const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.render("index");
});

router.use('/waivers', require("./guest.js"));

module.exports = router;
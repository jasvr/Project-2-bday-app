const express = require('express');
const router = express.Router();

router.get("/", function(req, res) {
    res.send("homepage");
});

router.use(require("./guest.js"));

module.exports = router;
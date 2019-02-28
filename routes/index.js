const express = require('express');
const router = express.Router();

router.get("/", function(req, res) {
    res.send("homepage");
});
/* ---ROUTES--- */
//localhost:3000/guest
router.use('/guest', require("./guest.js"));


module.exports = router;
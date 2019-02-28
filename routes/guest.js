const express = require('express');
const router = express.Router();

//index
router.get("/", function(req, res) {
    res.send("index");
});
//new- render view
router.get("/new", function(req, res) {
    res.send("new");
});
//create- take body of form, save to db, then redirect to home or o/page
router.post("/", function(req, res) {
    res.redirect("/");
});

//show- http://localhost:3000/guest/jasmin/
router.get("/:id", function (req,res){
    res.send(`hello ${req.params.id}`);
})

//edit- http://localhost:3000/guest/jasmin/edit
router.get("/:id/edit", function(req, res) {
    res.send(`edit ${req.params.id}`);
});
//update- take body of form, update in db, then redirect to home or o/page
router.put("/:id", function(req, res) {
    res.redirect("/");
});
//create- take body of form, remove from db, then redirect to home or o/page
router.delete("/:id", function(req, res) {
    res.redirect("/");
});

module.exports = router;
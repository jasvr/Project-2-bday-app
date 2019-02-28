const express = require('express');
const router = express.Router();
const itemController = require('../controllers/guest');

//index
router.get("/", itemController.index);

//new- render view
router.get("/new", itemController.new);

//create- take body of form, save to db, then redirect to home or o/page
router.post("/", itemController.create);

//show- http://localhost:3000/guest/jasmin/
router.get("/:id", itemController.show);

//edit- http://localhost:3000/guest/jasmin/edit
router.get("/:id/edit", itemController.edit);

//update- take body of form, update in db, then redirect to home or o/page
router.put("/:id", itemController.update);

//delete- take body of form, remove from db, then redirect to home or o/page
router.delete("/:id", itemController.delete);

module.exports = router;
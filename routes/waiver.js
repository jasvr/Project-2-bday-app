const router = require('express').Router();
const waiverController = require('../controllers/waiver.controller')

router.route('/')
    .get(waiverController.findAll)
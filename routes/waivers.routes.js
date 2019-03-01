const router = require('express').Router();
const waiverController = require('../controllers/waiver.controller')

router.route('/')
    .get(waiverController.findAll);

    router.route('/add')
        .get(waiverController.showAddWaiverForm)
        .post(waiverController.add);

    router.route('/edit')
        .get(waiverController.showEditWaiverForm)
        .put(waiverController.edit);

module.exports = router;
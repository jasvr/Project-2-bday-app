const GuestWaiver = require('../models');

class WaiverController {

    showAddWaiverForm(req, res, next) {
        // create the model object
        const model = {
            new: true,
            method: 'post',
            action: '/waivers/add',
            submitText: 'Create Waiver',
            cancelText: 'Cancel'
        }

        res.render('waivers/edit-new', {model});
    }

    add(req, res, next) {
        console.log('WaiverController.add(...): called');
        res.redirect('/waivers');
    }

    edit(req, res, next) {
        console.log('WaiverController.add(...): called');
        res.redirect('/waivers');
    }

    showEditWaiverForm(req, res, next) {
        // create the model object
        const model = {
            new: false,
            method: 'put',
            action: '/waivers/edit',
            submitText: 'Edit Waiver',
            cancelText: 'Cancel'
        }

        res.render('waivers/edit-new', {model});
    }

    findAll(req, res, next) {
        // the page model
        const model = {};

        console.log('WaiverController.findAll(): called');

        // fetch all the waivers
        GuestWaiver.find({})
            .then (resp=>{
                console.log('WaiverController.findAll()', {resp});
                model.waivers = resp;
                res.render('waivers/waivers', {model, diagnostics: JSON.stringify(model)});
            })
            .catch(err=>{
                console.log('WaiverController.findAll()', {err});
            });
    }
}

module.exports = new WaiverController();
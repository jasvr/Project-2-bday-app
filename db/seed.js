const Guest = require('../models/index')

Guest.remove({}).then(function () {
    Guest.create({
        firstName: "Jas",
        lastName: "Vargas",
        email: "abc123@gmail.com",
        cellNumber: "703-881-1354",
        agree: true
    });

    Guest.create({
        firstName: "Avi",
        lastName: "Ro",
        email: "avi123@gmail.com",
        cellNumber: "703-991-1362",
        agree: true
    })

    Guest.create({
        firstName: "Jace",
        lastName: "Bar",
        email: "jace123@gmail.com",
        cellNumber: "703-991-9062",
        agree: true
    });
});

//const firstGuest =

//CB and answer: why guests vs guest in DB? db pluarlizes it 
const Guest = require('../models/index')

const firstGuest = Guest.create({
    firstName: "Jas",
    lastName: "Vargas",
    email: "abc123@gmail.com",
    cellNumber: "703-881-1362", 
    agree: true
});

//CB and answer: why guests in DB?
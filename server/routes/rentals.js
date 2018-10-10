const express = require('express');
const router = express.Router();
const Rental = require('../models/rentalModel');


//get all rentals
router.get('/', ( req, res ) => {
    Rental.find({})
        .then(data => {
            res.json(data);
        })
});


//get single rentals
router.get('/:id', ( req, res ) => {
    Rental.findById({_id: req.params.id}, (err, rental) => {

        if (!rental) return res.status(422).json({errors: [{msg: 'Rental not found'}] });

        res.json(rental);

    })

});


module.exports = router;
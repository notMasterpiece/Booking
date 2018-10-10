const express = require('express');
const mongoose = require('mongoose');
const Rental = require('./models/rentalModel');
const fakeDB = require('./fakeDB');
const rentalRoute = require('./routes/rentals');

const config = require('./config/dev');
const app = express();


mongoose.connect(config.DB_URI)
    .then(() => {
        console.log('connecting to mongo db');
        const fake = new fakeDB;
        fake.seedDB();
    })
    .catch(err => console.log(err));






app.get('/', (req, res) => {
    res.json({
        1: req.connection.remoteAddress,
        2: req.connection.remotePort,
        3: req.connection.localAddress,
        4: req.connection.localPort,
    })
});



app.use('/api/v1/rentals', rentalRoute);




require('./start_path/port')(app);


const express = require('express');
const mongoose = require('mongoose');

const config = require('./config/dev');
const app = express();


mongoose.connect(config.DB_URI)
    .then(() => console.log('connecting to mongo db'))
    .catch(err => console.log(err));






app.get('/', (req, res) => {
    res.json({
        1: req.connection.remoteAddress,
        2: req.connection.remotePort,
        3: req.connection.localAddress,
        4: req.connection.localPort,
    })
});






const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`);
});
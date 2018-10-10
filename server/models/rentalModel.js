const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const renatalSchema = new Schema({
   title: {
       type: String,
       required: true,
       max: [128, 'Максимальна кількість символів 128']
   },
    city: {
        type: String,
        required: true,
        lowercase: true,
        min: [4, 'Введіть більше 4 символів']
    },
    category: {
        type: String,
        required: true,
        lowercase: true
    },
    image: {
        type: String,
        required: true,
        lowercase: true
    },
    datailimage: {
        type: String,
        required: true,
        lowercase: true
    },
    bedrooms: Number,
    shared: Boolean,
    description: {
       type: String,
       required: true
    },
    createdAt: {
       type: Date,
       default: Date.now()
    },
    dailyRate: Number,

}, { versionKey: false });

module.exports = mongoose.model('Rental', renatalSchema);
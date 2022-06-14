const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const costSchema = new Schema({
    userId: Number,
    category: String,
    description: String,
    sum: Number,
    monthAndYear: String
});

const Cost = mongoose.model('costs', costSchema);

module.exports = Cost;

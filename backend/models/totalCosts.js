const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const costsByMonthAndYearSchema = new Schema ({

})

const totalCostsSchema = new Schema({
    userID: Number,
    category: String,
    description: String,
    sum: String,
    monthAndYear: String
});

const Cost = mongoose.model('costs', costSchema);

module.exports = Cost;

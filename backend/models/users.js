const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: {type: Number, unique: true},
    firstName: String,
    lastName: String,
    birthday: String,
    maritalStatus: String,
    totalCosts: {
        type: Map,
        of: Number,
        default: {'key_test': 0}
    }

});

const User = mongoose.model('users', userSchema);
module.exports = User;

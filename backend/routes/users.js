const express = require('express');
const router = express.Router();
const User = require('../models/users');


router.post('/create', function (req, res) {
    isValidUserID(req.body.userId, function (result) {
        if (!result) {
            const user = req.body;
            const userName = `${user.firstName} ${user.lastName}`;
            User.create(user)
                .then(function (doc) {
                    res.json(myResponse(true, `${userName} has been created successfully!`))})
                .catch(function (result) {
                    res.json(myResponse(false, 'There was an error in creating the user. Try again!'))})
        } else {
            res.json(myResponse(false, `The ID (${req.body.userId}) is already in use`));
        }
})})

function isValidUserID(userId, fn){
    User.findOne({userId: userId}, function (err, user){
        fn(user);
    })
}

function myResponse(state, message){
    return (
        {
            state: state,
            message: message
        }
    )
}

module.exports = {
    router,
    isValidUserID}


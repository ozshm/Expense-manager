
const User = require('../models/users');

const express = require('express');
const router = express.Router();
const Cost = require('../models/costs');

// const isValidUserID = require('./routes/users').isValidUserID;

router.post('/create', function (req, res) {
    isValidUserID(req.body.userId, function(user) {
        if (user){
            const userName = `${user.firstName} ${user.lastName}`;
            Cost.create(req.body)
                .then(function (result) {

                    const prevCost = user.totalCosts.get(req.body.monthAndYear);
                    User.updateOne({userId: req.body.userId}
                        , { $set: { [`totalCosts.${req.body.monthAndYear}`] : parseInt(req.body.sum) + (prevCost ? prevCost:0)}})
                        .then( ()=> {
                            res.json(myResponse(true,`Cost has been added to ${userName} (ID:${user.userId})`));})
                        .catch( () =>{
                            res.json(myResponse(false, `Error in updating the cost for ${user.userId}`));
                        })
                })
                .catch(function (result) {
                    console.log(result);
                    res.json(myResponse(false, 'There was an error creating the cost'));
                })


        } else {
            res.json(myResponse(false, 'ID not found!'));
        }
    })

});

router.get('/get', function (req, res) {
    isValidUserID(req.query.userId, async function (user){
        if (user) {
            const cost = user.totalCosts.get(req.query.monthAndYear)
            if (cost){
                res.json(myResponse(true, null, cost));
            } else {
                res.json(myResponse(false, 'Cost not found'))
            }

        } else {
            res.json(myResponse(false, 'ID not found'))
        }
    })
    //JSON.stringify()

})

function isValidUserID(userId, fn){
    // User.find({userID: userID}, function (err, docs){
    //     fn(docs)
    // });
    User.findOne({userId: userId}, function (err, user){
        fn(user);
    })
}

function myResponse(state, message, body){
    return (
        {
            state: state,
            message: message,
            body: body
        }
    )
}


module.exports = router;

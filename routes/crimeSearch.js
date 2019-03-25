var express = require('express');
var router = express.Router();
var Crime = require('../models/crimesModel');

router.get('/findByCode/:code/:name', (req, res) => {
    Crime.updateOne({
        category: {
            code: req.params.code,
            name: req.params.name
        }
    }, {date: req.params.date}, (error, results) => {
        if (error) {
            res.send(error)
        } else {
            res.send(results)
        }
    });
});

module.exports = router;

// "unable-to-proceed",
//     "name": "Court case unable to proceed"
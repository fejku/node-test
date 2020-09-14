const express = require('express');
const router = express.Router();
const Oplata = require('../models/Oplata');

router.get('/', (req, res) => {    
    res.send("asd");
});

router.post('/', (req, res) => {
    console.log(req.body);
    // const oplata = new Oplata({
    //     nazwa: req.body.nazwa,
    //     kwota: req.body.kwota,
    //     data_kolejnej_oplaty: req.body.data_kolejnej_oplaty,
    //     historyczne_oplaty: req.body.historyczne_oplaty,
    // });

    // oplata.save()
    // .then(data => {
    //     res.json(data);
    // })
    // .catch(err => {     
    //     res.json({message: err});
    // });
    
});

module.exports = router;
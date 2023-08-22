const express = require('express'),
      router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'JordiG - Blog - JavaScript - Productividad'
    })
})


module.exports = router
const express = require('express'),
      router = express.Router()

router.get('/', (req, res) => {
  res.render('contact', {
    title: 'JordiG - Contacto'
  })
})

module.exports = router
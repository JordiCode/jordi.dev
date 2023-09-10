const express = require('express'),
      router = express.Router()
const fs = require('fs')

router.get('/:post', (req, res, next) => {
    const post = req.params.post

    fs.access(`views/posts/${post}`, (err) => {
      if (err) {
        next()
      }
    
      res.render(`posts/${post}`, {
        title: 'JordiG - Blog - JavaScript - Productividad'
      })
    })
    



})


module.exports = router
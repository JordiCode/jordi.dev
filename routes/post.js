const express = require('express'),
      router = express.Router()
const fs = require('fs')
const pool = require('../database')   


router.get('/:post', async (req, res, next) => {
    const post = req.params.post

    const { rows } = await pool.query('SELECT * FROM posts WHERE src = "?"', [post])
    console.log(rows)
    
    /*
    if (!data) {

      fs.access(`views/posts/${post}`, (err) => {
        if (err) {n
          next()
        }
      })

      res.render(`posts/${post}`, {
        title: 'JordiG - Blog - JavaScript - Productividad'
      })
    } else {
        console.log('error')
        return 
    }
    */

 
})


module.exports = router
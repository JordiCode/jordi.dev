const express = require('express'),
      router = express.Router()
const fs = require('fs')
const pool = require('../database')   


router.get('/:post', async (req, res, next) => {
    const urlPost = req.params.post
    const { rows } = await pool.query('SELECT * FROM posts WHERE src_post = $1', [urlPost])
    const post = rows[0]

    if (post) {
      fs.access(`posts/${post['src_post']}`, (err) =>{
        if (err === null) {
          next()
        } else {
          res.render(`posts/${post['src_post']}`, 
          {
            title: post['title']
          })
        }
      })

    } else {
      next()
    }
  
})


module.exports = router
const router = require('express').Router()
const pool = require('../database')   

router.get('/', async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM posts')
    const posts = rows

    res.render('blog', {
        title: 'Blog - JavaScript - Productividad',
        posts: posts
    })
})




module.exports = router
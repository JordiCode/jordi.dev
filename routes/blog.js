const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('blog', {
        title: 'Blog - JavaScript - Productividad'
    })
})




module.exports = router
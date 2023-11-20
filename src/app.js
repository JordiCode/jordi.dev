const express = require('express'),
     favicon = require('serve-favicon'),
     path = require('path'),
     logger = require('morgan'),
     viewURL = __dirname + '/views',
     publicURL = 'public',
     faviconURL = publicURL + '/images/favicon.ico'

const index = require('./routes/index')
const blog = require('./routes/blog.js')
const post = require('./routes/post.js')
const contact = require('./routes/contact')

const app = express()

//setting
app.set('views', viewURL)
app.set('view engine', 'pug')
app.locals.basedir = app.get('views'); 

app.use(logger('dev'))
app.use(express.static(publicURL))
app.use(favicon(faviconURL))


//Delete '/' end.
app.use((req, res, next) => {
     if (req.path.endsWith('/') && req.path !== '/') {
       const newPath = req.path.slice(0, -1);
       return res.redirect(301, newPath);
     }
     next()
})

   
app.use('/', index)
app.use('/blog', blog)
app.use('/blog/', post)
app.use('/contact', contact)

app.use((req, res) => {
     res.status(404).send('No se encontro este sitio')
})

module.exports = app
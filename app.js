const express = require('express'),
     favicon = require('serve-favicon'),
     path = require('path'),
     logger = require('morgan'),
     viewURL = __dirname + '/views',
     publicURL = __dirname + '/public',
     faviconURL = publicURL + '/images/favicon.ico'

const index = require('./routes/index')
const blog = require('./routes/blog.js')
const post = require('./routes/post.js')



const app = express()

//setting
app.set('views', viewURL)
app.set('view engine', 'pug')
app.locals.basedir = app.get('views'); 

//app.use(logger('dev'))
app.use(express.static(publicURL))
app.use(favicon(faviconURL))


app.use('/', index)
app.use('/blog', blog)
app.use('/blog/', post)

app.use((req, res) => {
     res.status(404).send('No se encontro este sitio')
})

module.exports = app
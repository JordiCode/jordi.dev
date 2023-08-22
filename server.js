const app = require('./app')
const browserSync = require('browser-sync').create();
const PORT = 3000

app.listen(PORT, () => {
    console.log('Servidor ejecutandose en el puerto: ' + PORT)
})


browserSync.init({
    proxy: 'http://localhost:3000', 
    files: ['public/**/*', 'views/**/*', 'partials/**/*'], 
    port: 4000, 
  });
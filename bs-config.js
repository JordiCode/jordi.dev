module.exports = {
  proxy: "http://localhost:3000", 
  files: ['locales/**/*', 'public/**/*', 'src/views/**/*', 'src/partials/**/*'], 
  port: 4000
}
const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.set('view engine', 'njk')

const users = ['Vitor Giovane', 'Diego Fernandes', 'Filipe Deschamps']

app.get('/', (req, res) => {
  return res.render('list', { users })
})

})

app.listen(3000)

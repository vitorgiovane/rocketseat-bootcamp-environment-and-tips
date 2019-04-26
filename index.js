const express = require('express')

const app = express()

const logMiddleware = (req, res, next) => {
  console.log(`
  HOST: ${req.headers.host}
  URL: ${req.url}
  METHOD: ${req.method}
  `)
  
  return next()
}

app.get('/', logMiddleware, (req, res) => {
  return res.send(`Welcome, ${req.query.name}!`)
})

app.get('/name/:name', (req, res) => {
  return res.json({
    message: `Welcome, ${req.params.name}!`
  })
})

app.listen(3000)

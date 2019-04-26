const express = require('express')

const app = express()

const logMiddleware = (req, res, next) => {
  console.log(`
  HOST: ${req.headers.host}
  URL: ${req.url}
  METHOD: ${req.method}
  `)

  req.appName = 'GoNode'
  
  return next()
}

app.use(logMiddleware)

app.get('/', (req, res) => {
  return res.send(`Welcome to ${req.appName}, ${req.query.name}!`)
})

app.get('/name/:name', (req, res) => {
  return res.json({
    message: `Welcome to ${req.appName}, ${req.params.name}!`
  })
})

app.listen(3000)

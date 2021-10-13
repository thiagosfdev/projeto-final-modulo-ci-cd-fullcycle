const operations = require('./operations')

const express = require('express')

const api = express()

const hostname = 'localhost'

const port = 3000

api.get('/', (_req, res) => res.json({ api: 'OK' }))

operations.div(10, 20)

operations.mod(10, 20)

operations.mult(10, 20)

operations.sub(10, 20)

operations.sum(10, 20)

api.listen(port, () => {

  console.log(`Server running at http://${hostname}:${port}`)
  
})

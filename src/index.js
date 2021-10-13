const operations = require('./operations')
const express = require('express')

const api = express()
const hostname = 'localhost'
const port = 3000

api.get('/', (_req, res) => res.json({ api: 'OK' }))

const soma = operations.sum(10, 20)

api.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}`)
  console.log('soma :>> ', soma);
})

const express = require('express')

const api = express()
const hostname = 'localhost'
const port = 3000

api.get('/', (_req, res) => res.json({ api: 'OK' }))

api.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}`);
})

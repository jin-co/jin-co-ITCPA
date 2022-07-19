const express = require('express')
const set = express()
set.use(express.static(__dirname + '/dist/itcpa'))
set.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/itcpa/index.thml')
})
const http = require('http')
const port = process.env.PORT | 3000
const app = require('./backend/app')
const server = http.createServer((app))
server.listen(port)
'use strict'

require('babel-core')
const express = require('express')
const path = require('path')
const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer()
const app = express()

let port = 3000
let publicPath = path.resolve(__dirname, 'public')

app.use(express.static(publicPath))

const bundle = require('./server/bundle.js')()

app.all('/build/*', function (req, res) {
  proxy.web(req, res, {
    target: 'http://localhost:8080'
  })
})

proxy.on('error', e => console.log('Could not connect to proxy, please try again... '))

app.listen(port, () => console.log(`Server running on port ${port}`))

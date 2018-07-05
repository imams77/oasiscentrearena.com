'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const ENV = require('./env/dev')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV
})

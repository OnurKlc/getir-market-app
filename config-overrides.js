const { override, addBabelPlugins } = require('customize-cra')
const { aliasWebpack, aliasJest } = require('react-app-alias')

const options = {}

module.exports = override(
  addBabelPlugins('babel-plugin-styled-components'),
  aliasWebpack(options)
)

module.exports.jest = aliasJest(options)

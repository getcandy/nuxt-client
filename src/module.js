const path = require('path')

module.exports = function (moduleOptions) {
    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        options: moduleOptions
    })
}

module.exports.meta = require('../package.json')

const path = require('path')

module.exports = function (moduleOptions) {
    const templates = [
        // Store
        './HttpClient.js',
      ];

      templates.forEach((template) => {
        this.addTemplate({
          src: path.resolve(__dirname, template),
          fileName: template
        })
      })

    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        options: moduleOptions
    })
}

module.exports.meta = require('../package.json')

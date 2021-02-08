const kebabCase = require('lodash/kebabCase')
const camelCase = require('lodash/camelCase')
const capitalize = require('lodash/capitalize')

export default ({ app, $axios }, inject) => {
    inject('getcandy', {
      async on (ref, method, ...opts) {
        const moduleRef = `${capitalize(camelCase(ref))}Api`
        const apiRef = `${kebabCase(moduleRef)}`
        const apiModule = await import(`@getcandy/js-client/dist/api/${apiRef}.js`)
        const module = new apiModule[moduleRef](null, '', app.$auth.ctx.$axios)
        return module[method](...opts)
      }
    })

}

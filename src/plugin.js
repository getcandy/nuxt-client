const kebabCase = require('lodash/kebabCase')
const camelCase = require('lodash/camelCase')
const upperFirst = require('lodash/upperFirst')

export default ({ app, $axios }, inject) => {
    inject('getcandy', {
      async on (ref, method, ...opts) {
        const moduleRef = `${upperFirst(camelCase(ref))}Api`
        const apiRef = `${kebabCase(moduleRef)}`
        try {
          const apiModule = await import(`@getcandy/js-client/dist/api/${apiRef}.js`)
          const className = apiModule[moduleRef]
          const module = new className(null, '', app.$auth.ctx.$axios)
          return module[method](...opts)
        } catch (e) {
          throw new Error(`Unable to find ${method} on ${apiRef}`)
        }
      }
    })

}

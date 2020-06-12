const GetCandy = require('@getcandy/js-client')

export default class HttpClient {
    constructor (options) {
        this.$gc = GetCandy
        this.http = null
    }
    setHttp (http) {
        this.http = http
    }
    on (resource) {
        return new this.$gc[`${resource}Api`](null, '', this.http)
    }
}

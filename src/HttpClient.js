const GetCandy = require('@getcandy/js-client')

export default class HttpClient {
    constructor () {
        this.$gc = GetCandy
    }
    setToken (token) {
        const instance = this.getApiInstance()
        var auth = instance.authentications['auth']
        auth.accessToken = token
    }
    getApiInstance () {
        return this.$gc.ApiClient.instance
    }
    setHost (host) {
        const instance = this.getApiInstance()
        instance.basePath = `${host}/api/v1`
    }
    withCredentials () {
        const instance = this.getApiInstance()
        instance.enableCookies = true
    }
    setDefaultHeaders (headers) {
        const instance = this.getApiInstance()
        instance.defaultHeaders = headers
    }
    on (resource) {
        return new this.$gc[`${resource}Api`]
    }
}

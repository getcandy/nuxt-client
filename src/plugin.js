import HttpClient from './HttpClient'

export default ({ app }, inject) => {
    const options = <%= JSON.stringify(options, null, 2) %>

    const client = new HttpClient();

    if (options.host) {
        client.setHost(options.host)
    }

    client.withCredentials()
    client.setDefaultHeaders({
        'X-CANDY-HUB': true,
    })

    inject('getcandy', client)
}

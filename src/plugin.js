import HttpClient from './HttpClient'

export default ({ app }, inject) => {
    const options = <%= JSON.stringify(options, null, 2) %>

    const client = new HttpClient();

    if (options.host) {
        client.setHost(options.host)
    }
    inject('getcandy', client)
}

import HttpClient from './HttpClient'

export default ({ app }, inject) => {
    const options = <%= JSON.stringify(options, null, 2) %>

    inject('getcandy', new HttpClient)
}

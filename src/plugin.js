import HttpClient from './HttpClient'

export default ({ app }, inject) => {
    inject('getcandy', new HttpClient())
}

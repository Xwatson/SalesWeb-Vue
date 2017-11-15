const config = require('../../config/config.json')[process.env.NODE_ENV]

export default {
    BASE_API_URL: config.apiHost + '/',
    PAYED_RESULT_URL: window.location.protocol + '//' + window.location.hostname + '/payments',
    getUrl: function(endpoint) {
        return (endpoint.indexOf(this.BASE_API_URL) === -1) ? this.BASE_API_URL + endpoint : endpoint
    }
}

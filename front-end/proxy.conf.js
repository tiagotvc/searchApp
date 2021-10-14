const PROXY_CONFIG = [
    {
        context: ['/api'],
        target:'http://account-api:3001/',
        secure: false,
        logLevel: 'debug'

    }
];

module.exports = PROXY_CONFIG;